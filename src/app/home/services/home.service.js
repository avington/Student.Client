/**
 * Created by smoseley on 12/14/2015.
 */
(function(module){
    var imageService = function($q, $http){
        var service = {
            getImages: function(){
                //use angular $http to return a promise
                return $http.get('http://localhost:61906/api/HomeImages');
            }
        }

        return service;
    }
    module
        .factory('imageService', imageService)

})(angular.module('home'));