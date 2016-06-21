(function() {
  'use strict';

  angular
    .module('technical.tweet')
    .factory('tweetService',tweetService);

    /* @ngInject */
    function tweetService(tweetDao){

    	var service = {
            getLastTweets : getLastTweets
    	}

    	return service;

        function getLastTweets(city){
            return tweetDao.getLastTweets(city);
        }

    }

})();
