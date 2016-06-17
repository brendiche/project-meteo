(function() {
  'use strict';

  angular
    .module('core')
    .config(config)
    .config(googleMap);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    
    toastrConfig.progressBar = true;
  }

  function googleMap(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        v: '2.3.3',
        libraries: 'weather,geometry,visualization'
    });
  }

})();
