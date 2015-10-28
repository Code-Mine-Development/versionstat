'use strict';

/**
 * @ngdoc function
 * @name versionstatApp.controller:ReporterCtrl
 * @description
 * # ReporterCtrl
 * Controller of the versionstatApp
 */
angular.module('versionstatApp')
  .controller('ReporterCtrl', ['$scope', '$http', '$dataExtractor', function($scope, $http, $dataExtractor) {
    $scope.fetch = function(repository) {

      $scope.responseSuccess = null;
      $scope.error = null;
      $scope.versions = [];

      repository.components = repository.name.split('/');
      console.dir(repository.components);

      if(2 === repository.components.length) {

        $http.get('https://api.github.com/repos/' + repository.components[0] + '/' + repository.components[1] +'/releases')
          .then(function (response) {
            $scope.responseSuccess = true;

            $dataExtractor.extractDates(response.data);

          }, function () {
            $scope.responseSuccess = false;
            console.dir($scope.responseSuccess);
          });

      } else {
        $scope.responseSuccess = false;
        $scope.error = 'Invalid repository name :(';
      }

    };
  }]);
