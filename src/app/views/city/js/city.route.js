(function() {
  'use strict';

  angular
    .module('views.city')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('city', {
        url: '/city/:city',
        templateUrl: 'app/views/city/city.html',
        controller: 'CityController',
        controllerAs: 'city',
        params : {
              city : null
            }
      });

  }

})();
