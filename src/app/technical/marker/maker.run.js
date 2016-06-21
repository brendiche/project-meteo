(function() {
  'use strict';

  angular
    .module('technical.marker')
    .run(initMarker);

  /** @ngInject */
  function initMarker(markerService,$log,$rootScope) {

    $log.debug('Init marker start');
    markerService.init().then(function(markers){
      $rootScope.$broadcast('markerReady');
    	$log.debug('Init marker end : ' ,markers);
    })
  }

})();
