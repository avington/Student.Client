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
                            '<button id="prevButton" class="btn btn-link" ng-click="prevClicked()">Prev</button>',
                        '</div>',
                        '<div class="col-md-10">',
                            '<div class="carosel">',
                                '<img class="img-fluid" src="{{images[0].url}}">',
                            '</div>',
                        '</div>',
                        '<div class="col-md-1 pull-right">',
                            '<button id="nextButton" class="btn btn-link"  ng-click="nextClicked()">Next</button>',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(''),
            scope: {
                images: '='
            },
            link: function (scope, element, attrs) {

                scope.prevClicked = function () {
                    var newIndex;
                    var index = _.findIndex(scope.images, function (image) {
                        return image.selected
                    });

                    if (index === 0) {
                        newIndex = scope.images.length - 1;
                    } else {
                        newIndex = index - 1;
                    }

                    _.forEach(scope.images, function (image) {
                        image.selected = false;
                    });

                    scope.images[newIndex].selected = true;
                    element.find('img').first().attr('src', scope.images[newIndex].url);
                }

                scope.nextClicked = function () {
                    var newIndex;
                    var index = _.findIndex(scope.images, function (image) {
                        return image.selected
                    });

                    if (index === scope.images.length - 1) {
                        newIndex = 0;
                    } else {
                        newIndex = index + 1;
                    }

                    _.forEach(scope.images, function (image) {
                        image.selected = false;
                    });

                    scope.images[newIndex].selected = true;
                    element.find('img').first().attr('src', scope.images[newIndex].url);
                }
            }
        }
    }

    module
        .directive('studentImage', studentImageDirective)
})(angular.module('home'));