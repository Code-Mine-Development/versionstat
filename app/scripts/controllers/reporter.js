'use strict';

/**
 * @ngdoc function
 * @name versionstatApp.controller:ReporterCtrl
 * @description
 * # ReporterCtrl
 * Controller of the versionstatApp
 */
angular.module('versionstatApp')
  .controller('ReporterCtrl',
    [
      '$scope',
      '$http',
      '$dataExtractor',
      '$moment',
      function($scope, $http, $dataExtractor, moment) {


    $scope.fetch = function(repository) {

      $scope.responseSuccess = null;
      $scope.error = null;
      $scope.releaseList = null;
      $scope.details = {
        'min' : moment().subtract(1,'y')
      };

      repository.components = repository.name.split('/');

      if(2 === repository.components.length) {

        $http.get('https://api.github.com/repos/' + repository.components[0] + '/' + repository.components[1] +'/releases')
          .then(function (response) {
            $scope.responseSuccess = true;
            $scope.releaseList = $dataExtractor.extractDates(response.data);

          }, function () {
            $scope.responseSuccess = false;
          });

      } else {
        $scope.responseSuccess = false;
        $scope.error = 'Invalid repository name :(';
      }

    };
  }]);
