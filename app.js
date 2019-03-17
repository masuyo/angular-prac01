var mySamuraiApp = angular.module("mySamuraiApp", []);

mySamuraiApp.config(function(){
    // before the application runs

});

mySamuraiApp.run(function(){

});

mySamuraiApp.controller("SamuraiController", ['$scope', function($scope){

    $scope.message = "hey";
    $scope.samurais = [
        {
            name: "Kaname",
            status: "rhonin",
            rate: 50,
            available: true
        },
        {
            name: "Haruka",
            status: "samurai",
            rate: 10,
            available: false
        },
        {
            name: "Rido",
            status: "rhonin",
            rate: 55,
            available: true
        }
    ];
}]);