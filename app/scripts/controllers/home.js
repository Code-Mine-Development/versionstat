'use strict';

/**
 * @ngdoc function
 * @name versionstatApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the versionstatApp
 */
angular.module('versionstatApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.reports = [1];

    $scope.add = function(){
      $scope.reports.push($scope.reports.length+1);
    };

  }]);
