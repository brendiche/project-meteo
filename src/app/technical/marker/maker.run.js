(function() {
  'use strict';

  angular
    .module('technical.marker')
    .run(initMarker);

  /** @ngInject */
  function initMarker(markerService,$log) {

    $log.debug('Init marker start');
    markerService.init().then(function(markers){
    	$log.debug('Init marker end : ' ,markers);
    })
  }

})();
