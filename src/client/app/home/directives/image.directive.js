/**
 * Created by smoseley on 12/31/2015.
 */
(function (module) {

    var studentImageDirective = function () {
        return {
            restrict: 'E',
            template: [
                '<div class="jumbotron">',
                    '<div class="row">',
                        '<div class="col-md-1 pull-left">',
                            '<button id="prevButton" class="btn btn-link" ng-click="vm.prevClicked()">Prev</button>',
                        '</div>',
                        '<div class="col-md-10">',
                            '<div class="carosel">',
                                '<img class="img-fluid" ng-src="{{vm.images[0].url}}">',
                            '</div>',
                        '</div>',
                        '<div class="col-md-1 pull-right">',
                            '<button id="nextButton" class="btn btn-link"  ng-click="vm.nextClicked()">Next</button>',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(''),
            scope: {
                images: '='
            },
            link: function (scope, element, attrs) {
                var vm = scope.vm;
                vm.prevClicked = function () {
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
                    element.find('img').first().attr('src', vm.images[newIndex].url);
                }

                vm.nextClicked = function () {
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
                    element.find('img').first().attr('src', vm.images[newIndex].url);
                }
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function(){}
        }
    }

    module
        .directive('studentImage', studentImageDirective)
})(angular.module('home'));