"use strict";

app.controller("LoadCtrl", function($scope, $http){
	$http({
	  method: 'GET',
	  url: 'https://mushroom-mania-737f0.firebaseio.com/mushrooms.json'
	}).then(function mush(response){
		let mushArray = [];
		for (var i in response.data){
			let mushObj = {};
			mushObj.name = response.data[i].name;
			mushObj.edible = response.data[i].edible;
			mushObj.description = response.data[i].description;
			mushArray.push(mushObj);

		}
		console.log(mushArray);
		$scope.mushrooms = mushArray;
	});
});