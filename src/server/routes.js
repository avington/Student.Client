/*jshint node:true*/
'use strict';
var express = require('express');
var router = express.Router();
var notfound_1 = require('./utils/notfound'); // use latest TS 1.5, inspired from ES6
//import four0four = require('./utils/404');
var data = require('./data');
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/homeImages', getImages)
router.get('/*', notfound_1.notFoundMiddleware);
module.exports = router;
//////////////
//EG TODO: find type for next argument
function getPeople(req, res, next) {
    res.status(200).send(data.getPeople());
}
function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.getPeople().filter(function (p) {
        return p.id === id;
    })[0];
    if (person) {
        res.status(200).send(person);
    }
    else {
        notfound_1.send404(req, res, 'person ' + id + ' not found');
    }
}

function getImages(req, res, next){
    var images = [
        {id: 1, url: 'http://lorempixel.com/400/200/sports/1/', caption: 'this is image 1', selected: true},
        {id: 2, url: 'http://lorempixel.com/400/200/sports/2/', caption: 'this is image 2', selected: false},
        {id: 3, url: 'http://lorempixel.com/400/200/sports/3/', caption: 'this is image 3',  selected: false}
    ];

    res.status(200).send(images);
}
//# sourceMappingURL=routes.js.map
