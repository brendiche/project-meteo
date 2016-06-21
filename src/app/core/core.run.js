(function() {
  'use strict';

  angular
    .module('core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state) {

    $log.debug('runBlock end');
    $state.go("app");
  }

})();
