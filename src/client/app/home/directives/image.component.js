/**
 * Created by smoseley on 2/16/2016.
 */
(function (module) {

    var template = [
        '<div class="jumbotron">',
            '<div class="row">',
                '<div class="col-md-1 pull-left">',
                    '<button id="prevButton" class="btn btn-link" ng-click="$ctrl.prevClicked()">Prev</button>',
                '</div>',
                '<div class="col-md-10">',
                    '<div class="carosel">',
                        '<img class="img-fluid" ng-src="{{$ctrl.currentImageUrl}}">',
                    '</div>',
                '</div>',
                '<div class="col-md-1 pull-right">',
                    '<button id="nextButton" class="btn btn-link"  ng-click="$ctrl.nextClicked()">Next</button>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    var component = {
        bindings: {
            images: '<'  // the < makes the binding one way
        },
        template: template,
        controller: 'StudentImageController'
    };

    var StudentImageController = function StudentImageControllerMethod(){
        
        var vm = this;
        
        vm.prevClicked = function() {
            console.log('previous clicked');
            var newIndex;
            var index = _.findIndex(vm.images, function (image) {
                return image.selected
            });

            if (index === 0) {
                newIndex = vm.images.length - 1;
            } else {
                newIndex = index - 1;
            }

            _.forEach(vm.images, function (image) {
                image.selected = false;
            });

            vm.images[newIndex].selected = true;
            vm.currentImageUrl = vm.images[newIndex].url;
        };
        
        vm.nextClicked = function() {
            var newIndex;
            var index = _.findIndex(vm.images, function (image) {
                return image.selected
            });

            if (index === vm.images.length - 1) {
                newIndex = 0;
            } else {
                newIndex = index + 1;
            }

            _.forEach(vm.images, function (image) {
                image.selected = false;
            });

            vm.images[newIndex].selected = true;
            vm.currentImageUrl = vm.images[newIndex].url;
        };
        
         vm.$onInit = function(){
             vm.currentImageUrl = vm.images[0].url;
        }
    };

    module
        .component('studentImageComponent', component)
        .controller('StudentImageController', StudentImageController)

})(angular.module('home'));
