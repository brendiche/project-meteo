(function() {
  'use strict';

  angular
    .module('technical.marker')
    .factory('markerService',markerService);

    /* @ngInject */
    function markerService(meteoService,$q,$state,CONFIG){

        var markers = {
            markers : []
        }

    	var service = {
            markers : markers,
            init : init
    	}

    	return service;

        function init(){
            var deferred = $q.defer();
            
            for (var city in CONFIG.APP.CITIES) {
                var marker = {
                    id: markers.markers.length,
                    latitude: CONFIG.APP.CITIES[city].lat,
                    longitude:  CONFIG.APP.CITIES[city].long,
                    city : city,
                    templateUrl : "app/views/detailMeteo/detailMeteo.html",
                    goDetail:function(cityToGo){
                        $state.go('city',{"city" : cityToGo});
                    },
                    show : angular.equals(city,"Paris"),
                    weather : meteoService.getWeatherForCity(city),
                    options: {
                        draggable: false
                    }
                  };
                markers.markers.push(marker);
            }

            $q.all(markers.markers.map(function(marker){return marker.weather;})).then(function(weathers){
                for (var i = 0; i < weathers.length; i++) {
                    weathers[i].main.temp = Math.round((weathers[i].main.temp-273)*10)/10+' °C';
                    markers.markers[i].weather = weathers[i];
                };
            });


            deferred.resolve(markers.markers);

            return deferred.promise;
        }

    }

})();
