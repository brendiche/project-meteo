(function() {
  'use strict';

  angular
    .module('technical.marker')
    .factory('markerService',markerService);

    /* @ngInject */
    function markerService($q,$state,CONFIG){

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
                    options: {
                        draggable: false
                    }
                  };
                markers.markers.push(marker);
            }

            deferred.resolve(markers.markers);

            return deferred.promise;
        }

    }

})();
