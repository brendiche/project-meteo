(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr,uiGmapGoogleMapApi,$log) {
    var vm = this;
    vm.showToastr = showToastr ;
    vm.map = {
                center: {
                 latitude: 48.84286537792912,
                 longitude: 2.3620292968751073
               },
                zoom: 7
             };


     vm.marker = {
      id: 0,
      coords: {
        latitude: 48.84286537792912,
        longitude: 2.3620292968751073
      },
      options: { draggable: true },
      events: {
        dragend: function (marker) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          vm.marker.options = {
            draggable: true,
            labelContent: "lat: " + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };

    uiGmapGoogleMapApi.then(function(maps){
      $log.debug("maps : ",maps);
      // $log.debug("maps.Size : ",maps.Size);
    });

    function showToastr(){
    	toastr.success("lat: " + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,'le pointeur');
    }

  }
})();
