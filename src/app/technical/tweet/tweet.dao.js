(function() {
  'use strict';

  angular
    .module('technical.tweet')
    .factory('tweetDao',tweetDao);

    /* @ngInject */
    function tweetDao(dataAccess,$q,$log){
    	var service = {
            getLastTweets:getLastTweets
    	}

    	return service;

        function getLastTweets(city){
            var deferred = $q.defer();

            $log.debug("[tweetDao][getLastTweets] start");
            dataAccess.getLatestTweets(city).then(function(response){
                $log.debug("[tweetDao][getLastTweets] success : ", response);
                deferred.resolve(response);
                $log.debug("[tweetDao][getLastTweets] end");
            }).catch(function(err){
                $log.error("[tweetDao][getLastTweets] error : ",err);
                deferred.reject(err);
                $log.debug("[tweetDao][getLastTweets] end");                
            });

            return deferred.promise;
        }

        
    }

})();
