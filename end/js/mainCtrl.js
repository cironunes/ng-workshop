'use strict';

angular.module('wannaBuy')
  .controller('MainCtrl', function ($scope, $location, wbItems) {
    $scope.items = wbItems.getItems();
    $scope.priorities = wbItems.getPriorities();

    $scope.addItem = function () {
      var newItem = {
        name: $scope.item.name,
        price: $scope.item.price,
        priority: $scope.item.priority
      };

      wbItems.addItem(newItem);
    };

    $scope.edit = function (id) {
      $location.path('edit/' + id);
    };

    $scope.remove = wbItems.deleteItem;
  });
