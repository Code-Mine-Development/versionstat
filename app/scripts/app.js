'use strict';

/**
 * @ngdoc overview
 * @name versionstatApp
 * @description
 * # versionstatApp
 *
 * Main module of the application.
 */
angular
  .module('versionstatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/reporter.html',
        controller: 'ReporterCtrl',
        controllerAs: 'reporter'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
