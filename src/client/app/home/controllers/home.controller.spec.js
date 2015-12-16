/**
 * Created by smoseley on 12/14/2015.
 */
describe('CONTROLLER: HomeController', function () {

    var vm;
    var $q;
    var $timeout;
    var scope;
    var $controller;
    var imageServiceMock;
    var defer;

    beforeEach(function () {
        angular.mock.module('home');

        // use the jasmine mocking ability to create a mock of the image service
        imageServiceMock = jasmine.createSpyObj('imageService', ['getImages']);

        inject(function (_$controller_, _$rootScope_, _$q_) {

            // initialize the injected
            $controller = _$controller_;
            scope = _$rootScope_.$new();
            $q = _$q_;

            // bing in the angular promise service so I can mock a returned promise
            defer = $q.defer();

            // mock the function call and return a promise
            imageServiceMock.getImages.and.returnValue(defer.promise);

            // after the service has been mocked create the controller
            vm = $controller('HomeController', {
                $scope: scope,
                imageService: imageServiceMock
            });
        });

    });

    it('should be an existing controller named HomeController', function () {
        expect(vm).toBeDefined();
    });


    it('should have title property with the correct value', function(){
        expect(vm.title).toBe('Welcome to the Student Portal');
    });

    it('should have a list of images returned from the image service', function(){
        // resolve the service
        defer.resolve({data: homeImages});

        // this is inportant, you need to tell angular to update the scope
        // to recognize the changes
        scope.$apply();

        // test your response
        expect(vm.images.length).toBeGreaterThan(0);
        expect(vm.images[0].imageUrl).toBe('http://themeforest.net/hac/habitasse.json');
    });


});
