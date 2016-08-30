(function () {
	"use strict";

	angular.module('home',[])
		.controller('HomeController',HomeController);

		function HomeController() {
			var vm = this;
			vm.title = "home";
			vm.under = _.first([1, 2, 3, 4, 5]);
		
		};

})();


