'use strict';

angular.module('app', [])

.controller('MainCtrl', function ($scope) {

    $scope.isAddingItem = false;
    $scope.isEditingItem = false;
    $scope.currentIndex = false;

    $scope.items = [{
            id: 1,
            name: "Moto 360",
            price: 250.00,
            photo: "moto-360.jpg",
            description: "Relógio digital Moto 360 da Motorola",
            priority: "Alta",
    },
        {
            id: 2,
            name: "Google Glass Explorer Edition",
            price: 1900.00,
            photo: "google-glass.jpg",
            description: "Glass Explorer Edition com ponto de ouvido",
            priority: "Baixa",
    }];

    $scope.addItem = function () {
        $scope.isAddingItem = !$scope.isAddingItem;
        $scope.items.push({
            id: $scope.items.length + 1,
            name: $scope.add.name,
            price: $scope.add.price,
            photo: $scope.add.photo,
            description: $scope.add.description,
            priority: $scope.add.priority
        });
        alert($scope.add.name + " adicionado!");
    }

    $scope.startEditingItem = function (index) {
        $scope.currentIndex = index;
        $scope.isEditingItem = !$scope.isEditingItem;
        $scope.edit = {};
        $scope.edit.name = $scope.items[index].name;
        $scope.edit.photo = $scope.items[index].photo;
        $scope.edit.price = $scope.items[index].price;
        $scope.edit.description = $scope.items[index].description;
        $scope.edit.priority = $scope.items[index].priority;
    }
    
    $scope.confirmEditingItem = function() {
        $scope.items[$scope.currentIndex].name = $scope.edit.name;
        $scope.items[$scope.currentIndex].photo = $scope.edit.photo;
        $scope.items[$scope.currentIndex].price = $scope.edit.price;
        $scope.items[$scope.currentIndex].description = $scope.edit.description;
        $scope.items[$scope.currentIndex].priority = $scope.edit.priority;
        $scope.isEditingItem = !$scope.isEditingItem;
    }

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    }

});