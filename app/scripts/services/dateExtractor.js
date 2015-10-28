'use strict';

angular.module('versionstatApp').service('$dataExtractor',['$moment', function(moment){

  this.extractDates = function(releaseList) {

    var dates = [];
    var BreakPoint = {};


    try {


      var limitDate = moment().subtract(1, 'y');
      var beginning = moment().unix() - limitDate.unix();
      var max = null;

      releaseList.forEach(function (release) {

        var date = moment(release.published_at);

        var version = release.tag_name;
        var span = moment().unix() - date.unix();
        var difference = beginning - span;

        if(null === max) {
          max = difference;
        }

        var percentage = difference * 100 / max;


        if(false === date.isBefore(limitDate)) {
          dates.push({
            'date' : date.format('YYYY-MM-DD'),
            'name' : version,
            'timestamp' : date.unix(),
            'percentage' : percentage
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
