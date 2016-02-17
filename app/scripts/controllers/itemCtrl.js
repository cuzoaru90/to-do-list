angular.module('toDoList')
.controller('itemCtrl', ['$scope', '$stateParams', 'lists', function($scope, $stateParams, lists){

  $scope.list = lists.lists[$stateParams.id];

  $scope.addItem = function(){
    $scope.list.items.push($scope.title);
  };
  
}]);