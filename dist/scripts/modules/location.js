(function () {
	"use strict";

	angular.module('location',[])
		.factory('LocationService', LocationService)
		.controller('LocationController', LocationController);

		function LocationController(LocationService) {
			var vm = this;
			LocationService.get()
				.then(function(data) {
					vm.locations = data.data.VAFacilityData;
					vm.title = "location";
				});	
		};

		function LocationService($http) {
			return {
				get: function() {
					return $http.get("https://raw.githubusercontent.com/department-of-veterans-affairs/VHA-Facilities/master/VAFacilityLocation.json")
				}
			}
		};

})();