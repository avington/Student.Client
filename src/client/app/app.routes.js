/**
 * Created by smoseley on 12/14/2015.
 */
(function(module){

    var getCurrentStates = function(){
        return [
            {
                state: 'default',
                config: {
                    url: '/home',
                    controller: 'HomeController as vm',
                    templateUrl: 'app/home/templates/home.template.html'

                }
            }
        ];
    }

    var configureRoutes = function($stateProvider, $urlRouterProvider){
        var states = getCurrentStates()
        states.forEach(function(state){
            $stateProvider.state(state.state, state.config);
        })
        var otherwise = '/home';
        $urlRouterProvider.otherwise(otherwise);
    };


    module.config(configureRoutes);

})(angular.module('app'));
