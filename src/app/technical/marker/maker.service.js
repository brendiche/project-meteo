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
                        $state.go('app.main.city',{"city" : cityToGo});
                    },
                    show : angular.equals(city,"Paris"),
                    weather : meteoService.getWeatherForCity(CONFIG.APP.CITIES[city]),
                    options: {
                        draggable: false
                    }
                  };
                markers.markers.push(marker);
            }
            $q.all(markers.markers.map(function(marker){return marker.weather;})).then(function(weathers){
                console.log(weathers);
                localStorage.setItem("weathers",JSON.stringify(weathers));
                for (var i = 0; i < weathers.length; i++) {
                    if(CONFIG.APP.WEATHER[weathers[i].weather[0].main]){
                        weathers[i].weather[0].main = CONFIG.APP.WEATHER[weathers[i].weather[0].main];
                    }else{
                        weathers[i].weather[0].main = CONFIG.APP.WEATHER["UNKNOWN"];
                    }
                    weathers[i].main.temp = Math.round((weathers[i].main.temp-273)*10)/10+' °C';
                    markers.markers[i].weather = weathers[i];
                }
                deferred.resolve(markers.markers);
            });


            return deferred.promise;
        }

    }

})();
