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

    uiGmapGoogleMapApi.then(function(maps){
      $log.debug("maps : ",maps);
    });

    vm.onClick = onClick;

    function onClick(marker, eventName, model) {
        model.show = !model.show;
    }


  }
})();
