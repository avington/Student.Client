/**
 * Created by smoseley on 12/14/2015.
 */
(function(module){
    var homeController = function(imageService){

        var vm = this;

        var handleSuccess = function(response){
            vm.images = response.data;
        };

        var init = function(){

            vm.title = 'Welcome to the Student Portal';
            imageService.getImages()
                .then(handleSuccess)
        };

        init();
    };

    module
        .controller('HomeController', homeController)

})(angular.module('home'));
