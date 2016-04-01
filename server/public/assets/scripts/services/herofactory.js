/**
 * Created by JFCS on 4/1/16.
 */
myApp.factory('HeroService',['$http',function($http){
    var herotest = "factory is up and running.";
    var heroes = {};

    var postHeroes = function(object){
        $http.post('/hero',object).then(function(response){
        console.log('response in factory post', response);
            getHeroes();
        });
    };

    var getHeroes = function(){
        $http.get('/hero').then(function(response){
            console.log('response in factory get',response);
            heroes.object = response.data;
        })
    };
    var removeHero = function(id){
        $http.delete('/hero/'+id).then(function (response){
            console.log('response in factory delete',response);
            getHeroes();
        });
    };

    return{
        test: herotest,
        postData: postHeroes,
        getData: getHeroes,
        heroes : heroes,
        removeData : removeHero
    };


}]);