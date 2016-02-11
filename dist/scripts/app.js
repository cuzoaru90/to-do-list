var app = angular.module('toDoList', ['ui.router']);

 app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   //$urlRouterProvider.otherwise('/');     
   $stateProvider
     .state('lists', {
     url: '/lists',
     controller: 'listCtrl',
     templateUrl: '/templates/lists.html'
     })
     .state('items', {
     url: '/list{id}',
     controller: 'itemCtrl',
     templateUrl: '/templates/items.html'
     });
 }]);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Controller working!';
}]);

app.controller('listCtrl', ['$scope', 'lists', function($scope, lists){

  $scope.lists = lists.lists;

  $scope.addList = function(){
    $scope.lists.push( 
      { title: $scope.title, items: [] }
    );
  };
  
}]);

app.controller('itemCtrl', ['$scope','$stateParams', 'lists', function($scope, $stateParams, lists){

  $scope.list = lists.lists[$stateParams.id];

  $scope.addItem = function(){
    $scope.list.items.push($scope.title);
  };
  
}]);

app.factory('lists', [function(){
  var collection = {
    lists: [ 
      {title: "default list", items: ["default_item"] }
    ]
  };
  return collection;
}]);
