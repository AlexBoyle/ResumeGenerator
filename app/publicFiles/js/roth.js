angular.module('App').controller('roth',['$scope', function($scope){
	$scope.InitalValue = 0;
	$scope.yearlyControbutions = 10000;
	$scope.yearlyIntrest = .05;
	$scope.years = 40;
	$scope.avrTaxCurr = .3;
	$scope.avrTaxLater = .3;
	let canCall = false;
	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawTrendlines);

	function drawTrendlines() {
		var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');
		data.addColumn('number', '401K');
		data.addColumn('number', 'Roth');
		let data1 = [];
		for(let i = 0; i <=40; i ++) {
			data1.push(
				[i, 
				intrestCalc($scope.InitalValue, $scope.yearlyControbutions, $scope.yearlyIntrest, i), 
				intrestCalc($scope.InitalValue, $scope.yearlyControbutions * (1-$scope.avrTaxCurr), $scope.yearlyIntrest, i)
				])
		}
		
		data.addRows(data1);

		var options = {
			hAxis: {
				title: 'Years'
			},
			vAxis: {
				title: 'Dollars'
			},
			colors: ['#AB0D06', '#007329'],
			
		};

		var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
		chart.draw(data, options);
		canCall = true;
	}
	
	
	let intrestCalc = function(inital, contributions, interest, years) {
		let d = (interest/(1+interest))
		return ((inital + (contributions/d))*(Math.pow(1+interest,years)))-(contributions);
	}
	$scope.calculate = function() {
		let k = {}
		let roth = {}
		
		k["fourty"] = intrestCalc($scope.InitalValue, $scope.yearlyControbutions, $scope.yearlyIntrest, $scope.years)
		k["contributions"] = $scope.yearlyControbutions * $scope.years;
		k['interest'] = k["fourty"] - k["contributions"];
		k['profit'] = k["fourty"] * (1-$scope.avrTaxLater)
		
		roth["fourty"] = intrestCalc($scope.InitalValue, $scope.yearlyControbutions * (1-$scope.avrTaxCurr), $scope.yearlyIntrest, $scope.years)
		roth["contributions"] = $scope.yearlyControbutions * (1-$scope.avrTaxCurr) * $scope.years;
		roth['interest'] = roth["fourty"] - roth["contributions"];
		roth['profit'] = roth["fourty"];
		
		$scope.k = k;
		$scope.roth = roth;
		if(canCall)
			drawTrendlines();
	}
	$scope.calculate();
	
	
	
	
}]);