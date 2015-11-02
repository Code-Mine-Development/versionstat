'use strict';

angular.module('versionstatApp').directive('timeline', [function () {

  return {
    'restrict' : 'E',
    'templateUrl' : 'views/timeline/timeline.html',
    'scope' : {
      'versions' : '=releases',
      'extra' : '=extra',
      'status' : '=status'
    }
  };

}]);
