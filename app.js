var app = angular.module('jsbin', []);

app.controller('DemoCtrl', function($http,$scope) {
  
  var vm = this;
  $scope.myvalue = false;
  
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

  $scope.submit = function () {
  		console.log($scope.search);
		var request = {
			method: 'GET',
			url: URL,
			params: {
			   q: $scope.search,
			   mode: 'json',
			   units: 'metric',
			   cnt: '7',
			  appid: '2206d84c8189efe365465e3318f487aa'
			}
		  };

		 $http(request)
			.then(function(response) {
			  vm.data = response.data;
			  vm.city = response.data.city.name;
			  vm.country = response.data.city.country;
			  vm.lat = response.data.city.coord.lat;
			  vm.lon = response.data.city.coord.lon;
			  console.log(vm.data);
			}).
			catch(function(response) {
			  vm.data = response.data;
			});

			
			$scope.myvalue = true;  
  } 
    
  

  
  

	

});