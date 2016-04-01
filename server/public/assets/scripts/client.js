/**
 * Created by JFCS on 4/1/16.
 */
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

    $routeProvider
        .when('/',{
            templateUrl : '/views/templates/home.html',
            controller : 'HomeController'
        })
        .when('/heroform',{
            templateUrl : '/views/templates/heroform.html',
            controller : 'FormController'
        })
        .when('/herolist',{
            templateUrl : '/views/templates/heroview.html',
            controller : 'ViewController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);