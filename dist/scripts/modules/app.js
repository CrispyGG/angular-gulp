(function () {
	"use strict";

	angular.module('app',['home','location','ui.router'])
		.config(function($stateProvider,$urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'templates/home.html',
					controller: 'HomeController',
					controllerAs: 'h'
				})
				.state('location', {
					url: '/location',
					templateUrl: 'templates/location.html',
					controller: 'LocationController',
					controllerAs: 'lc'
				})
			$urlRouterProvider.otherwise("/home");
		});

})();


