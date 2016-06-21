(function() {
  'use strict';

  angular
    .module('views.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(markerService,$scope,CONFIG) {
    var vm = this;
    vm.select = {
     cities:[],
     city:{} 
    }
    vm.city = {
      display:false
    };
    vm.changeCity = changeCity;

    activate();

    function activate(){
      for(var city in CONFIG.APP.CITIES){
        vm.select.cities.push({name:city,id:vm.select.cities.length});
      }

      $scope.$on("markerReady",function(){
        if(localStorage.getItem("city")){
          var idx = vm.select.cities.map(function(city){return city.name;}).indexOf(localStorage.getItem("city"));
          if(!angular.equals(idx,-1)){
            vm.select.city = vm.select.cities[idx];
          }
          idx = markerService.markers.markers.map(function(marker){return marker.city}).indexOf(vm.select.city.name)
          console.log(markerService.markers.markers);
          if(!angular.equals(idx,-1)){
            vm.city.city = markerService.markers.markers[idx].city;
            vm.city.temp = markerService.markers.markers[idx].weather.main.temp;
            vm.city.weather = markerService.markers.markers[idx].weather.weather[0].description
            vm.city.display = true;
          }
        }else{
          vm.select.cities.unshift({name:"Chosisez votre ville",id:-1});
          vm.select.city = {name:"Chosisez votre ville",id:-1};
        }
      });
    }


    function changeCity(){
      if(!angular.equals(vm.select.city.id,-1)){
        var idx = markerService.markers.markers.map(function(marker){return marker.city}).indexOf(vm.select.city.name)
        if(!angular.equals(idx,-1)){
          vm.city.city = markerService.markers.markers[idx].city;
          vm.city.temp = markerService.markers.markers[idx].weather.main.temp;
          vm.city.weather = markerService.markers.markers[idx].weather.weather[0].description
          vm.city.display = true;
          localStorage.setItem('city',vm.select.city.name);
        }
        
      }
    }

  }
})();
