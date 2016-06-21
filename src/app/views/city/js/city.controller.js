(function() {
  'use strict';

  angular
    .module('views.city')
    .controller('CityController', CityController);

  /** @ngInject */
  function CityController(marker,tweets, $log ) {
    var vm = this;
    vm.marker = marker;
    vm.tweets = tweets;
  }
})();
