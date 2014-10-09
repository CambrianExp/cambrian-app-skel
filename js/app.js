appModule = angular.module("app", ['ngMaterial','ngAria'])
.controller("appCtrl", function ($scope,$materialSidenav) {
  // controller logic go here
  	$scope.toggleMenu = function () {
	  $materialSidenav('left').toggle();
	};
});