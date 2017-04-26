(function() {
    'use strict';

    angular
        .module('routing')
		.directive('weather', function (API) {

		  return {
		    restrict: 'E', // Restrict to Element only
		    templateUrl: '../partials/weather.html',
    		 link: function ( vm, element, attrs ){

		      	let data= API.getWeather(attrs.city); 
		      									//^ what you refrence in your html tag. could be anything coencides with <weather 

		    	data.then(res=>{
		    		console.log("WEATHER",res);
		    		vm.weather = res.data;
		    	})
		    },

		  };
		});
})();
