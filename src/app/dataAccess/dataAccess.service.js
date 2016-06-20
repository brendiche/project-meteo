(function() {
  'use strict';

  angular
    .module('dataAccess')
    .factory('dataAccess',dataAccess);

    /* @ngInject */
    function dataAccess($http){
    	var service = {
            getWeatherForCity : getWeatherForCity
    	}

    	return service;

        function getWeatherForCity(lat,long){
            return $http.get('assets/db/db.json');
        }

    }

})();
