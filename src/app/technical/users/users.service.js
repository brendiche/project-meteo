(function() {
  'use strict';

  angular
    .module('technical.users')
    .factory('usersService',usersService);

    /* @ngInject */
    function usersService(usersDao){
    	var service = {
            getUser : getUser
    	}

    	return service;

        function getUser(){
            return usersDao.getUser();
        }
    }

})();
