'use strict';

angular.module('wannaBuy')
  .factory('wbItems', function() {
    var placeholderImg = 'http://placehold.it/150x100';
    var items = [{
      id: 1,
      name: "Moto 360",
      price: 250.00,
      photo: placeholderImg
    },
    {
      id: 2,
      name: "Google Glass Explorer Edition",
      price: 1900.00,
      photo: placeholderImg
    }];
    var lastId = 2;

    function getItems() {
      return items;
    }

    function getItem(id) {
      var foundItem;

      items.forEach(function(item, i) {
        if (item.id == id) {
          foundItem = item;
        }
      });

      return foundItem;
    }

    function getItemIndex(id) {
      var index;

      items.forEach(function(item, i) {
        if (item.id == id) {
          index = i;
        }
      });

      return index;
    }

    function addItem(newItem) {
      newItem = angular.extend(newItem, {
        id: lastId + 1,
        photo: placeholderImg
      });

      items.push(newItem);
      lastId += 1;
    }

    function editItem(id, newItem) {
      var index = getItemIndex(id);

      items[index] = newItem;
    }

    function deleteItem(id) {
      var index = getItemIndex(id);

      items.splice(index, 1);
    }

    return {
      getItems: getItems,
      getItem: getItem,
      addItem: addItem,
      editItem: editItem,
      deleteItem: deleteItem
    };
  });
