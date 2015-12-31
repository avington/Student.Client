/**
 * Created by smoseley on 12/31/2015.
 */
describe('DIRECTIVE: student-image', function(){

    var $rootScope;
    var scope;
    var $compile;
    var compiledElement;

    /*
    The data to mock
     */
    var images;

    /*
     The HTML snippet that contains the directive to be under test
     */
    var snippet = [
        '<student-image images="images"><student-image/>'
    ].join('');

    beforeEach(function(){
        // get the module the directive is in
        angular.mock.module('home');

        //reset the images collection
        images = [
            {id: 1, url: 'http://lorempixel.com/400/200/sports/1/', caption: 'this is image 1', selected: true},
            {id: 2, url: 'http://lorempixel.com/400/200/sports/2/', caption: 'this is image 2', selected: false},
            {id: 3, url: 'http://lorempixel.com/400/200/sports/3/', caption: 'this is image 3',  selected: false}
        ];

        // inject the needed services and scope
        inject(function(_$rootScope_, _$compile_){
            $rootScope = _$rootScope_;
            $compile = _$compile_;

            scope = $rootScope.$new();

            scope.images = images;

            // compile the directive
            var element = angular.element(snippet);
            compiledElement = $compile(element)(scope);
            scope.$digest();
        });

    });

    it('should compile the directive into HTML', function(){
        // if there is a div in the html then it was compiled
        var divs = compiledElement.find('div');

        // find returns an array of elements so see if the count is greater than 0
        expect(divs.length).toBeGreaterThan(0);
        console.log(compiledElement.html());
    });

    it('should show the first image on the initial load', function(){
       var image = compiledElement.find('img').first();
        var src = image.attr('src');

        expect(src).toBe('http://lorempixel.com/400/200/sports/1/');
    });

    it('should set the last image image in the list when prev is clicked', function(){
        var prevButton = compiledElement.find('#prevButton').first();

        prevButton.triggerHandler('click');
        scope.$digest();

        expect(scope.images[0].selected).toBeFalsy();
        expect(scope.images[2].selected).toBeTruthy();

    });

    it('should set the 2nd image image in the list when next is clicked', function(){
        var nextButton = compiledElement.find('#nextButton').first();

        nextButton.triggerHandler('click');
        scope.$digest();

        expect(scope.images[0].selected).toBeFalsy();
        expect(scope.images[1].selected).toBeTruthy();

    });
});
