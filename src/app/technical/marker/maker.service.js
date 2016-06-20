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
                    weather : meteoService.getWeatherForCity(CONFIG.APP.CITIES[city]),
                    options: {
                        draggable: false
                    }
                  };
                markers.markers.push(marker);
            }

            if(!localStorage.getItem("weathers")){
                $q.all(markers.markers.map(function(marker){return marker.weather;})).then(function(weathers){
                    console.log(localStorage.getItem("weathers"));
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
            });

            }else{
                var items =  JSON.parse(localStorage.getItem("weathers"));
                console.log(items);
                for (var i = 0; i < items.length; i++) {
                    if(CONFIG.APP.WEATHER[items[i].weather[0].main]){
                        items[i].weather[0].main = CONFIG.APP.WEATHER[items[i].weather[0].main];
                    }else{
                        items[i].weather[0].main = CONFIG.APP.WEATHER["UNKNOWN"];
                    }
                    items[i].main.temp = Math.round((items[i].main.temp-273)*10)/10+' °C';
                    markers.markers[i].weather = items[i];
                }
            }



            deferred.resolve(markers.markers);

            return deferred.promise;
        }

    }

})();
