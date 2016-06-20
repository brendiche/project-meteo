(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(markerService,uiGmapGoogleMapApi,$log ) {
    var vm = this;
    vm.markers = markerService.markers;
    vm.map = {
                center: {
                 latitude: 46.61154451475838,
                 longitude: 2.4718925781251073
               },
                zoom: 6
             };

    vm.onClick = function() {
            vm.windowOptions.visible = !vm.windowOptions.visible;
        };

    uiGmapGoogleMapApi.then(function(maps){
      $log.debug("maps : ",maps);
    });

    vm.onClick = function(marker, eventName, model) {
        // console.log(marker);
        // console.log(eventName);
        // console.log(model);

            // console.log("Clicked!");
            model.show = !model.show;
        }

  }
})();
