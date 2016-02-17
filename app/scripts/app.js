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


app.factory('lists', [function(){
  var collection = {
    lists: [ 
      {title: "default list", items: ["default_item"] }
    ]
  };
  return collection;
}]);
