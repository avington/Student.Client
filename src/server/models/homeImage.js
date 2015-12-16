/**
 * Created by smoseley on 12/15/2015.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('HomeImage', {
    id: {type: Number},
    url: {type: String},
    caption: {type: String}
});
