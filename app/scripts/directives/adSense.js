'use strict';


angular.module('versionstatApp').directive('myAdSense', function() {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    template: '<div ng-transclude></div>'
  };
});
