(function() {
  'use strict';

  angular
    .module('core')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
     .state('app', {
            templateUrl: 'app/views/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
  }

})();
