(function() {
  'use strict';

  angular
    .module('views.main')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.main', {
        views: {
                    'content': {
                        templateUrl: 'app/views/map/map.html',
                        controller: 'mapController',
                        controllerAs: 'map'
                    }
                }
      });

  }

})();
