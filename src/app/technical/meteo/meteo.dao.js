(function() {
  'use strict';

  angular
    .module('technical.meteo')
    .factory('meteoDao',meteoDao);

    /* @ngInject */
    function meteoDao(dataAccess,$q,$log){
    	var service = {
            getWeatherForCity:getWeatherForCity
    	}

    	return service;

        function getWeatherForCity(lat,long){
            var deferred = $q.defer();

            $log.debug("[meteoDao][getWeatherForCity] start");
            dataAccess.getWeatherForCity(lat,long).then(function(response){
                $log.debug("[meteoDao][getWeatherForCity] success : ", response);
                deferred.resolve(response.data);
                $log.debug("[meteoDao][getWeatherForCity] end");
            }).catch(function(err){
                $log.error("[meteoDao][getWeatherForCity] error : ",err);
                deferred.reject(err);
                $log.debug("[meteoDao][getWeatherForCity] end");                
            });

            return deferred.promise;
        }

        
    }

})();
