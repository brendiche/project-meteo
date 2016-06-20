(function() {
  'use strict';

  angular
    .module('dataAccess')
    .factory('dataAccess',dataAccess);

    /* @ngInject */
    function dataAccess($http,CONFIG){
    	var service = {
            getWeatherForCity : getWeatherForCity
    	}

    	return service;

        function getWeatherForCity(lat,long){

            return $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+CONFIG.APP.APIKEYMETEO+'&lang=fr');
        }

    }

})();
