'use strict';

angular.module('versionstatApp').service('$dataExtractor',['$moment', function(moment){

  this.extractDates = function(releaseList) {

    var dates = [];
    var BreakPoint = {};


    try {

      releaseList.forEach(function (release) {

        var date = moment(release.published_at);
        var limitDate = moment().subtract(1, 'y');
        var version = release.tag_name;


        if(false === date.isBefore(limitDate)) {
          dates.push({
            'date' : date,
            'name' : version
          });
        } else {
          throw BreakPoint;
        }

      });

    } catch (exception) {
      if(exception !== BreakPoint) {
        throw exception;
      }
    }

    return dates;
  };

}]);
