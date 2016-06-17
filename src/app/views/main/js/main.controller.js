(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(users,toastr,uiGmapGoogleMapApi,$log) {
    var vm = this;
    vm.users = users;
    vm.showToastr = showToastr ;
    vm.map = {
                center: {
                 latitude: 40.1451,
                 longitude: -99.6680
               },
                zoom: 5
             };


     vm.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
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
      $log.debug("maps.Size : ",maps.Size);
    });

    function showToastr(){
      var i = Math.trunc((Math.random()*10)/5);
    	toastr.success('Hello world!',users[i].firstName+" "+users[i].lastName);
    }

  }
})();
