/**
 * Created by smoseley on 12/15/2015.
 */
describe('SERVICE: imageService', function () {

    var imageService;
    var $httpBackend;

    beforeEach(function () {

        angular.mock.module('home');

        inject(function (_imageService_, _$httpBackend_) {
            imageService = _imageService_;
            $httpBackend = _$httpBackend_;
        });

    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest()
    });

    it('should have an existing service called imageService', function () {
        expect(imageService).toBeDefined();
    });

    it('should have a function called getImages', function () {
        expect(angular.isFunction(imageService.getImages)).toBeTruthy();
    });

    it('should make a get call to images and return a list of images', function () {

        var data;

        $httpBackend
            .when('GET', 'http://localhost:8001/api/homeimages')
            .respond(200, homeImages);

        imageService.getImages()
            .then(function (response) {
                console.log(response);
                data = response.data
            });

        $httpBackend.flush();

        expect(data[0].id).toBe(1);
        expect(data[1].id).toBe(2);
        expect(data[2].id).toBe(3);

    });
});
