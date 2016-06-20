(function() {
  'use strict';

  angular
    .module('technical.meteo')
    .factory('meteoService',meteoService);

    /* @ngInject */
    function meteoService(meteoDao, CONFIG){

        var weathers = {
            weathers : []
        }

    	var service = {
            weathers : weathers,
            getWeatherForCity : getWeatherForCity,
            init : init
    	}

    	return service;

        function getWeatherForCity(city){
            return meteoDao.getWeatherForCity(city.lat,city.long);
        }

        function init(){
            
        }

    }

})();
