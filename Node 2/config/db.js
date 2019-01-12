var mongoose = require('mongoose');
mongoose.connect('mongodb://kashif:kashif36@ds149404.mlab.com:49404/saylaninode', {useNewUrlParser: true});

module.exports = mongoose;