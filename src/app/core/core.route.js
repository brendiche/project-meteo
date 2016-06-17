(function() {
  'use strict';

  angular
    .module('core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
