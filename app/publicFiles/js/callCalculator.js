angular.module('App').controller('callCalculator',['$scope', function($scope){
	$scope.currentPrice = "100";
	$scope.strike = "101";
	$scope.premium = "1";
	$scope.frequency = "5";
	$scope.end = "100";
	$scope.sigfig = 2;
	$scope.calculate = function() {
		let arr = [];
		let to = Math.abs(parseFloat($scope.end)/100);
		let fre = Math.abs(parseFloat($scope.frequency)/100)
		if (!fre) {
			fre = 1
		}
		if (!to) {
			to = 1
		}
		for(let i =0; i <= to; i += fre) {
			let obj = {};
			obj.profit = i*100;
			obj.priceChange = (Math.floor(
				(
					(
						(
							(i * parseFloat($scope.premium)) + 
							(parseFloat($scope.strike) + parseFloat($scope.premium))
						)/parseFloat($scope.currentPrice)
					) - 1
				) * Math.pow(10,$scope.sigfig + 2)
				)/Math.pow(10,$scope.sigfig)
			);
			obj.price = ((obj.priceChange/100)+1) * parseFloat($scope.currentPrice)
			arr.push(obj)
		}
		console.log(arr)
		$scope.changes = arr;
	}
	$scope.calculate();
}]);