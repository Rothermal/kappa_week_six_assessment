/**
 * Created by JFCS on 4/1/16.
 */
myApp.controller('ViewController',['$scope','HeroService',function($scope,HeroService){
    var heroService = HeroService;
    $scope.test = heroService.test;
    $scope.title = ' test of the View Contorller ';
    heroService.getData();
    $scope.heroes = [];

    $scope.heroes = heroService.heroes;

    $scope.removeHero = function(id){
        heroService.removeData(id);
    }

}]);