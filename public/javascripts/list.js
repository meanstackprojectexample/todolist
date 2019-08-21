
var app = angular.module('myApp', []); 
app.controller('todoCtrl',['$scope','$http', function($scope,$http) {
    //Getting Users List
    //$http GET function
    $http({
      method: 'GET',
      url: 'get'
    }).then(function successCallback(response) {

      $scope.todoList = response.data;

    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });
    //$http POST function
    $scope.todoAdd = function() {
    $http({
      method: 'POST',
      url: 'post',
      data: {todoText:$scope.todoInput, done:false}
    }).then(function successCallback(response) {
      //alert(JSON.stringify(response.data));
      $scope.todoList.push(response.data);
      $scope.todoInput = "";
      alert("Task Added Successfully")
    }, function errorCallback(response) {
      alert("Error. while created task Try Again!");
    });
    };
    $scope.remove = function(id) {
    //$http DELETE function
    $http({
      method: 'DELETE',
      url: '/delete/'+id
    }).then(function successCallback(response) {
      alert("Task deleted Successfully");
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
       // alert(JSON.stringify($scope.todoList));
    }, function errorCallback(response) {
      alert("Error. while deleting task Try Again!");
    });
  };
}]);