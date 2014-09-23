'use strict';

angular.module('wannaBuy')
  .controller('EditCtrl', function($scope, $routeParams, $location, wbItems) {
    $scope.item = wbItems.getItem($routeParams.id);

    $scope.priorities = wbItems.getPriorities();

    $scope.save = function() {
      wbItems.editItem($routeParams.id, $scope.item);
      $location.path('/');
    };

    $scope.remove = function () {
      wbItems.deleteItem($routeParams.id);
    };
  });
