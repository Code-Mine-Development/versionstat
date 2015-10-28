'use strict';


angular.module('versionstatApp').factory('$vis', ['$window', function($window) {
  return $window.vis;
}]);
