'use strict';

angular.module('wannaBuy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html'
      })
      .when('/edit/:id', {
        controller: 'EditCtrl',
        templateUrl: 'partials/edit.html'
      })
      .otherwise('/');
  });
