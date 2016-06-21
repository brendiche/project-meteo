(function() {
  'use strict';

  angular
    .module('dataAccess')
    .factory('dataAccess',dataAccess);

    /* @ngInject */
    function dataAccess($http,$q,CONFIG){

         var authorizationResult = false;


    	var service = {
            getWeatherForCity : getWeatherForCity,
            initTwitter : initTwitter,
            getLatestTweets : getLatestTweets

    	}

    	return service;

        function getWeatherForCity(lat,long){

            return $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+CONFIG.APP.APIKEYMETEO+'&lang=fr');
        }

        function initTwitter() {
            console.log("initTwitter");
            //initialize OAuth.io with public key of the application
            OAuth.initialize('eBlmZQo7oy1ArrWiN2Lion5bjqI', {
                cache: true
            });
            OAuth.initialize('eBlmZQo7oy1ArrWiN2Lion5bjqI')
            OAuth.popup('twitter').done(function(result) {
                authorizationResult = result;
                // do some stuff with result
            })
            //try to create an authorization result when the page loads,
            // this means a returning user won't have to click the twitter button again
            authorizationResult = OAuth.create("twitter");
            console.log("end initTwitter", authorizationResult);
        }

        function isReady() {
            return (authorizationResult);
        }


        function connectTwitter() {
            var deferred = $q.defer();
            OAuth.popup("twitter", {
                cache: true
            }, function(error, result) {
                // cache means to execute the callback if the tokens are already present
                if (!error) {
                    authorizationResult = result;
                    deferred.resolve();
                } else {
                    //do something if there's an error

                }
            });
            return deferred.promise;
        }

        function clearCache() {
            OAuth.clearCache('twitter');
            authorizationResult = false;
        }

        function getLatestTweets(maxId) {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            var url = '1.1/search/tweets.json?q=%23meteoparis ';
            // if (maxId) {
            //     url += '?max_id=' + maxId;
            // }
            var promise = authorizationResult.get(url).done(function(data) {
                // https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
                // when the data is retrieved resolve the deferred object
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            //return the promise of the deferred object
            return deferred.promise;
        }

    }

})();
