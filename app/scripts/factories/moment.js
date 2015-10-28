'use strict';


angular.module('versionstatApp').factory('$moment', ['$window', function($window) {
  return $window.moment;
}]);
