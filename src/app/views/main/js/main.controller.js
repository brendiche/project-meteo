(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(users,toastr) {
    var vm = this;
    vm.users = users;

    vm.showToastr = showToastr ;


    function showToastr(){
      var i = Math.trunc((Math.random()*10)/5);
    	toastr.success('Hello world!',users[i].firstName+" "+users[i].lastName);
    }

  }
})();
