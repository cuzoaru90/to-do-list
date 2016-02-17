angular.module('toDoList')
.controller('listCtrl', ['$scope', 'lists', function($scope, lists){

  $scope.lists = lists.lists;

  $scope.addList = function(){
    $scope.lists.push( 
      { title: $scope.title, items: [] }
    );
  };
  
}]);