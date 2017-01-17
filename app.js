// Simple form viewer based off finished demo from scotch.io

var validationApp = angular.module('validationTesting', []);

validationTesting.controller('mainController', function($scope) {
	$scope.submitForm = function(isValid) {
		if (isValid) {
			alert('Adam is the best');
		}
		else {
			alert('Oh no you didn&#39;t');
		}
	};
});
