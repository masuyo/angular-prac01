var mySamuraiApp = angular.module("mySamuraiApp", []);

mySamuraiApp.config(function(){
    // before the application runs

});

mySamuraiApp.run(function(){

});

mySamuraiApp.controller("SamuraiController", ['$scope', function($scope){

    $scope.message = "hey";
    $scope.samurais = ['kaname', 'haruka', 'rido']
}]);