(function() {
    'use strict';

    angular
        .module('routing')
        .controller('AddImageController', function(API) {
          const vm = this;


        vm.update = function(isValid) {
            alert("goodJob")
            console.log(vm.item);
            if (isValid) {
            let newItem = {"category": vm.item.category, "title": vm.item.title,  "description": vm.item.description, "url": vm.item.url,};
            let post = API.addImage(newItem);
            post.then(res=>{
              console.log(res);
            })
            vm.item = {}
             }else{
              alert("Form Incomplete")
             }
        }

      })
    })();
