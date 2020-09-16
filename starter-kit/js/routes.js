angular.module("starter")
.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'HomeCtrl'
		})
		.when('/petitionlist', {
			templateUrl: 'templates/petitionlist.html',
			controller:'PetitionCtrl'
		})
		.when('/startpetition', {
			templateUrl: 'templates/startpetition.html',
			controller: 'StartCtrl'
		})
	.when('/test', {
			templateUrl: 'templates/test.html',
			controller: 'StartCtrl'
	})
		.otherwise({
			redirectTo: '/home'
		});
});
