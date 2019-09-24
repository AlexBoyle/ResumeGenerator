
angular.module('App').run(['$rootScope', '$state', '$stateParams',
	function ($rootScope ,$state ,$stateParams) {
		$rootScope.Home = function() {
			$state.go('Wrapper.Home',{});
		}
		$rootScope.Resume = function() {
			$state.go('Wrapper.PrintResume',{});
		}
		$rootScope.Projects = function() {
			$state.go('Wrapper.Projects',{});
		}
		$rootScope.Running = function() {
			$state.go('Wrapper.Running',{});
		}
	}
])
angular.module('App').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
		.state("Wrapper", {
			templateUrl: 'html/wrapper.html'
		})
		.state("Wrapper.Home", {
			url: "/",
			templateUrl: 'html/Home.html',
			controller: 'Home',
		})
		.state("Wrapper.Projects", {
			url: "/projects",
			templateUrl: 'html/Projects.html',
			controller: 'Projects',
		})
		.state("Wrapper.Running", {
			url: "/running",
			templateUrl: 'html/Running.html',
			controller: 'Running',
		})
		.state("Wrapper.PrintResume", {
			url: "/resume",
			templateUrl: 'html/Resume.html',
			controller: 'printResume',
		})
		.state("Wrapper.CallCalculator", {
			url: "/CallCalculator",
			templateUrl: 'html/CallCalculator.html',
			controller: 'callCalculator',
		})
		.state("Wrapper.roth", {
			url: "/roth",
			templateUrl: 'html/Roth.html',
			controller: 'roth',
		})
	}]);