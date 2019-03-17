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
            lastShogun: "Nobunaga",
            available: true
        },
        {
            name: "Haruka",
            status: "samurai",
            rate: 10,
            lastShogun: "Nobunaga",
            available: false
        },
        {
            name: "Rido",
            status: "rhonin",
            rate: 55,
            lastShogun: "Hideyoshi",
            available: true
        },
        {
            name: "Shiki",
            status: "samurai",
            rate: 45,
            lastShogun: "Ieyasu",
            available: true
        },
        {
            name: "Aido",
            status: "samurai",
            rate: 40,
            lastShogun: "Nobunaga",
            available: true
        }
    ];
}]);