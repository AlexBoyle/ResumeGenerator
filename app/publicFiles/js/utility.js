(function(){
	angular.module('App', [
		'ngResource',
		'ngRoute',
		'ui.router',
		'ngMaterial',
	])
	.run(['$rootScope', '$state', '$stateParams',
		function ($rootScope ,$state ,$stateParams) {
			var timePeriodToString = function (start, end) {
				var time = (end - start) / 31557600000;
				var year = Math.floor(time);
				var month = Math.ceil((time - year) * 12);
				month++;
				if(month == 12) {
					month = month- 12;
					year ++;
				}
				return ''
					+ (year > 0 ? (year + ' yr' + (year > 1 ? 's' : '')) : '')
					+ ' ' 
					+ (month > 0 ? (month + ' mo' + (month > 1 ? 's' : '')) : '');
			}
			$rootScope.desc = '';
			$rootScope.work = [
				{
					'position': 'Campus Innovator',
					'company': 'Discover Financial Services',
					'img': 'niu.png',
					'location': 'DeKalb, IL',
					'date': "Aug 2018 - Current",
					'time': timePeriodToString(new Date('2016-04-01'), new Date('2018-05-01')),
					'desc': [
						{
							name: 'Technologies Used: Github, AWS, NodeJS, AngularJS, Spring'
						},
						{
							name: 'Responsibilities:',
							points: [
								'Set up and maintain AWS containers to provide a useful CI pipeline for a Vendor Tracking Application'
							]
						},
						{
							name: 'Projects:',
							points: [
								"Developed a system to track and organize thousands of third party interactions"
							]
						}
					]
				},
				{
					'position': 'Software Engineer Intern',
					'company': 'CDK Global',
					'img': 'niu.png',
					'location': 'Hoffman Estates, IL',
					'date': "Jun 2018 - Aug 2018",
					'time': timePeriodToString(new Date('2016-04-01'), new Date('2018-05-01')),
					'desc': [
						{
							name: 'Technologies Used: AngularJS, Typescript, ASP.NET, Bitbucket'
						},
						{
							name: 'Responsibilities:',
							points: [
								'Improved and updated CDK\'s flagship CRM product that is used by thousands of companies across North America',
								'Identified workflow issues in CDK\'s CRM And present possible fixes within a two week sprint cycle'
							]
						},
						{
							name: 'Projects:',
							points: [
								'Integrated an OEM\'s APIs into CDK\'s CRM to allow clients to look up financing options',
								'Standardized visual components to reduce the amount of time spent creating or fixing pages'
							]
						}
					]
				},
				{
					'position': 'Application Developer',
					'company': 'Northern Illinois University',
					'img': 'niu.png',
					'location': 'DeKalb, IL',
					'date': "Apr 2016 - May 2018",
					'time': timePeriodToString(new Date('2016-04-01'), new Date('2018-05-01')),
					'desc': [
						{
							name: 'Technologies Used: AngularJS, ThreeJS, Python, PHP, Docker, Fiddler, Gitlab'
						},
						{
							name: 'Responsibilities:',
							points: [
								'Developed new features defined by the housing department to better their workflows',
								'Worked on updating and supporting legacy applications that support front desk staff',
								'Looked into user reported bugs and come up with solutions or patches within a day'
							]
						},
						{
							name: 'Projects:',
							points: [
								'Wrapped NIU\'s desking services into Docker containers to create their first automated CI pipeline',
								'Developed an user auditing tool to help managers file reports and prevent system abuse by front desk staff',
								'Rewrote backup scripts to run about 50% faster which resulted in a more reliable backup system',
								'Assisted in the development of an application that rendered student living spaces in three dimensions'
							]
						}
					]
				}
		];
		$rootScope.other = [
		{
			'name': 'Video Game Design Club',
			'desc' : [
				'Taught 7 members of this club the basics of the Unity Engine and the process of developing  a video game',
				'Lead the development of 2 games and assisted in the development of 3 others'
			]
		},
		{
			'name': 'Eagle Scout - Boy Scouts of America',
			'desc' : [
				'Contributed 600+ hours of service to my community  over 8 years',
				'Helped plan and direct more than 10 troop outings to locations across Illinois'
			]
		},
		{
			'name': 'Treasurer - NIU\'s Cross Country Club',
			'desc' : [
				'Train to compete in 5k and 8k races through the year in a club circuit',
				'Create and propose budgets to NIU\'s club community to secure funding for the teams activities'
			]
		}
	]
		$rootScope.sections = {
			'Languages': [
				{'name':'JavaScript', 'img':'resume/images/js.png', 'url':''},
				{'name':'Python', 'img':'resume/images/python.png', 'url':''},
				{'name':'C++', 'img':'resume/images/cpp.png', 'url':''},
				{'name':'SQL', 'img':'resume/images/mysql.png', 'url':''},
				{'name':'Bash', 'img':'resume/images/bash.png', 'url':''},
				{'name':'C#', 'img':'resume/images/csharp.png', 'url':''},
				{'name':'Java', 'img':'resume/images/java.png', 'url':''},
				{'name':'HTML', 'img':'resume/images/html.png', 'url':''},
				{'name':'CSS', 'img':'resume/images/css.png', 'url':''}
			],
			'Utilities': [
				{'name':'Docker', 'img':'resume/images/docker.png', 'url':''},
				{'name':'Github', 'img':'resume/images/github.png', 'url':''},
				{'name':'Linux', 'img':'resume/images/linux.png', 'url':''},
				{'name':'JQuery', 'img':'resume/images/jquery.png', 'url':''},
				{'name':'AngularJS', 'img':'resume/images/angular.png', 'url':''},
				{'name':'NodeJS', 'img':'https://nodejs.org/static/images/logo.svg', 'url':''},
				{'name':'Fiddler', 'img':'http://crackvilla.com/wp-content/uploads/2017/02/Fiddler-4.6.20171.9220-Download-Free-Latest.png', 'url':''},
			],
			'Projects': [
				{'name':'BlenderBot', 'img':'resume/images/blender.png', 'url':'https://github.com/AlexBoyle/BlenderBot'},
				{'name':'AlexBoyle', 'img':'resume/images/alexboyle.png', 'url':'#'}
			]
		};
		 $state.go('WebResume',{});
		}
	])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider,	 $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
				.state("WebResume", {
				url: "",
				templateUrl: 'html/printResume.html',
				controller: 'webResume',
			})
			.state("PrintResume", {
				url: "/resume/",
				templateUrl: 'html/printResume.html',
				controller: 'printResume',
			})
	}]);
	angular.module('App').controller('webResume',['$scope', function($scope){
		console.log('web');
		var sidebar = false
		$scope.toggleSideBar = function(){
			console.log('toggle')
			if(sidebar) {
				$('.main').css('animation-name', 'sideBarCloseLeft');
				$('.sidebar').css('animation-name', 'sideBarCloseRight');
			}
			else {
				$('.main').css('animation-name', 'sideBarOpenLeft');
				$('.sidebar').css('animation-name', 'sideBarOpenRight');
			}
			sidebar = !sidebar;
		}
	}]);

	angular.module('App').controller('printResume',['$scope', function($scope){
		console.log('print');
	}]);
	angular.module('App').controller('general',['$scope', function($scope){
		console.log('gen');
	}]);
})();
