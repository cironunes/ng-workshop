'use strict';

angular.module('wannaBuy')
  .controller('MainCtrl', function ($scope, $location, wbItems) {
    $scope.items = wbItems.getItems();
    $scope.priorities = wbItems.getPriorities();

    $scope.addItem = function () {
      wbItems.addItem($scope.item);
    };

    $scope.edit = function (id) {
      $location.path('edit/' + id);
    };

    $scope.remove = wbItems.deleteItem;
  });
