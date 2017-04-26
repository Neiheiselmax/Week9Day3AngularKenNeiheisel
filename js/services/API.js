(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

        return {
          getImages:()=>{
            return $http({
              method:"GET",
              url:"http://localhost:8080/images",
            })
          },

        postImages:(data)=>{
            return $http({
              method:"POST",
              data: data,
              url:`http://localhost:8080/images/`,
            })
          },

          getImage:(id)=>{
            return $http({
              method:"GET",
              url:`http://localhost:8080/images/${id}`,
            })
          },
          deleteImage:(id)=>{
            return $http({
              method:"DELETE",
              url:`http://localhost:8080/images/${id}`,
            })
          }
    	}
    });

})();
