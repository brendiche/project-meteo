(function() {
  'use strict';

  angular
    .module('views.city')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('app.main.city', {
        url: '/city/:city',
        views:{
          'content@app':{
              templateUrl: 'app/views/city/city.html',
              controller: 'CityController',
              controllerAs: 'city',
            }
        },
        params : {
              city : null
        },
        resolve :{
          marker: function(markerService, $stateParams){
            var index = markerService.markers.markers.map(function(marker){return marker.city;}).indexOf($stateParams.city);
            if(!angular.equals(index,-1)){
              return markerService.markers.markers[index];
            }else{
              return {};
            }
          },
          tweets: function(tweetService, $stateParams){
            return tweetService.getLastTweets($stateParams.city);
          }
        }
      });

  }

})();
