/**
 * Created by JFCS on 4/1/16.
 */
myApp.controller('FormController',['$scope','HeroService',function($scope,HeroService){
    var heroService = HeroService;
    $scope.test = heroService.test;
    $scope.hero = {};
    $scope.title = ' test of the Form Contorller ';
    $scope.powersArray = ['Invisibility','Flight','Super Speed','Heat Vision','Super Strength','Accelerated Healing','Power Blast','Animal Affinity'];

    $scope.postHero = function(object){
        console.log('hero in post' ,object);
        heroService.postData(object);
        $scope.hero = {};
    }
}]);








