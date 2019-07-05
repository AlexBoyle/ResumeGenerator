angular.module('App').controller('Projects',['$scope', function($scope){
	$scope.projects = [
		{
			name: "Simple Neural Network",
			date: new Date("4/15/2019"),
			tech: "C++",
			img: "",
			link: "https://github.com/AlexBoyle/Neural-Network",
			desc: "For a few years now I have tried to comprehend how AI works. Armed with knowledge from my linear algebra class I challenged myself to implement a simple neural network in C++ without libraries. Over the few weeks that I worked on this project I implemented a simple system for forward and backward propagation for a system of matrices. In the end my network could be trained to do most bit operations but could not get through the MNIST image data set with any reasonable accuracy after about 8+ hours of training. ",
		},
		{
			name: "BrainF-ck Interpreter",
			date: new Date("2/28/2019"),
			tech: "C++",
			img: "https://raw.githubusercontent.com/AlexBoyle/BrainF-ckInterpreter/master/screenshots/beer.png",
			link: "https://github.com/AlexBoyle/BrainF-ckInterpreter",
			desc: "I started this project while I was hosting office hours when I was a Teaching Assistant for NIU. Simply, I wanted to create an interpreter for a language that I loved. Brainfuck only uses 8 characters to create a turing complete language and I wanted to see how fast I could get this language to run in a C++ interpreter. While most of the program was straight forward, I struggled with getting loops to run correctly; while I was struggling a github user rdebath, who is active in the Brainfuck community, reached out to give me some guidance which helped me along. This short project ended up being very successful as this interpreter ended being a useful command line tool that was modeled after pythons. ",
		},
		{
			name: "NIU's Track Club Website",
			date: new Date("5/10/2018"),
			tech: "Node.js, AngularJS, Docker",
			img: "images/Untitled.png",
			link: "https://github.com/AlexBoyle/NIUTrackWebsite",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum diam sed dolor pretium placerat. Mauris id lacus ac lectus molestie malesuada at vel velit. Aliquam vehicula ante in faucibus vehicula. Quisque ut pellentesque arcu. Morbi posuere bibendum dolor, id pulvinar ipsum interdum eu. Aenean in leo vitae dui tempor pharetra. Proin pulvinar aliquam nisl id tempus. Integer vitae est eget ante scelerisque porttitor. Vestibulum tempus dignissim dolor, sit amet tristique justo. Vestibulum sed ullamcorper lorem. Aenean eros elit, gravida ac nisi tincidunt, aliquam scelerisque leo. Phasellus nibh magna, mollis aliquam risus at",
		},
		{
			name: "Blender Bot",
			date: new Date("8/24/2016"),
			tech: "Python, discord.py, Docker",
			img: "https://camo.githubusercontent.com/46aff610cbf710b3d0be15da104fd2383632cab0/687474703a2f2f692e696d6775722e636f6d2f3566424b334e562e6a7067",
			link: "https://github.com/AlexBoyle/BlenderBot",
			desc: "In 2016, A few of my friends set up a discord server so we could stay in contact throughout college. At the time I was just getting into some simple programing classes and was fascinated with what I had been taught.  To me, the obvious next step was to attempt to construct a simple chatbot that my friends could interact with. After a few months of writing and rewriting my chat bot it was able to; hold votes and poles in the chat, give the current weather, get rules from our chats mock “terms and conditions” list, and produce random images from the popular image sharing site imgur.",
		},
		{
			name: "Secret Alien Man",
			date: new Date("4/15/2016"),
			tech: "Unity Game Engine",
			img: "http://ludumdare.com/compo/wp-content/compo2/542293/46816-shot0-1460943079.png",
			link: "https://github.com/AlexBoyle/LudumDare35",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum diam sed dolor pretium placerat. Mauris id lacus ac lectus molestie malesuada at vel velit. Aliquam vehicula ante in faucibus vehicula. Quisque ut pellentesque arcu. Morbi posuere bibendum dolor, id pulvinar ipsum interdum eu. Aenean in leo vitae dui tempor pharetra. Proin pulvinar aliquam nisl id tempus. Integer vitae est eget ante scelerisque porttitor. Vestibulum tempus dignissim dolor, sit amet tristique justo. Vestibulum sed ullamcorper lorem. Aenean eros elit, gravida ac nisi tincidunt, aliquam scelerisque leo. Phasellus nibh magna, mollis aliquam risus at",
		}
	];
}]);