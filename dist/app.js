(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl:'partials/mushroom-details.html'
	}).
	otherwise('/');
});


},{}],2:[function(require,module,exports){
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
},{}]},{},[1,2]);
