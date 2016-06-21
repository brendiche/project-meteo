(function() {
  'use strict';

  angular
    .module('dataAccess')
    .run(initdataAccess);

  /** @ngInject */
  function initdataAccess(dataAccess) {
    dataAccess.initTwitter();
    // dataAccess.getLatestTweets(5).then(function(result){
    //   console.log(result);
    // });
  }

})();
