(function() {
  'use strict';

  angular
    .module('views.map')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.main.map', {
        url: '/',
        views:{
          'content@app':{
            templateUrl: 'app/views/map/map.html',
            controller: 'MapController',
            controllerAs: 'map'
          }
        }
      });

  }

})();
