var mySamuraiApp = angular.module("mySamuraiApp", []);

mySamuraiApp.config(function(){
    // before the application runs

});

mySamuraiApp.run(function(){

});

mySamuraiApp.controller("SamuraiController", ['$scope', function($scope){

    $scope.removeSamurai = function(samurai) {
        var removedSamurai = $scope.samurais.indexOf(samurai);
        $scope.samurais.splice(removedSamurai, 1)
    }

    $scope.samurais = [
        {
            name: "Kaname",
            status: "rhonin",
            rate: 50,
            lastShogun: "Nobunaga",
            flag: "gold",
            available: true
        },
        {
            name: "Haruka",
            status: "samurai",
            rate: 10,
            lastShogun: "Nobunaga",
            flag: "gold",
            available: false
        },
        {
            name: "Rido",
            status: "rhonin",
            rate: 55,
            lastShogun: "Akechi",
            flag: "red",
            available: true
        },
        {
            name: "Shiki",
            status: "samurai",
            rate: 45,
            lastShogun: "Hideyoshi",
            flag: "orange",
            available: true
        },
        {
            name: "Aido",
            status: "samurai",
            rate: 40,
            lastShogun: "Nobunaga",
            flag: "gold",
            available: true
        }
    ];
}]);