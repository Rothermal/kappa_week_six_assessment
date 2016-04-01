/**
 * Created by JFCS on 4/1/16.
 */
myApp.controller('HomeController',['$scope','HeroService',function($scope,HeroService){
    var heroService = HeroService;
    $scope.test = heroService.test;
    $scope.title = ' test of the Home Contorller ';
}]);