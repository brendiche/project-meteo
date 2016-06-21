(function() {
  'use strict';

  angular
    .module('dataAccess')
    .run(initdataAccess);

  /** @ngInject */
  function initdataAccess(dataAccess) {
    dataAccess.initTwitter();
  }

})();
