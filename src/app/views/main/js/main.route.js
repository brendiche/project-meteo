(function() {
  'use strict';

  angular
    .module('views.main')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve:{
          users: function(usersService){
            return usersService.getUser();
          }
        }
      });

  }

})();
