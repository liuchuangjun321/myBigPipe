var jade = require('jade');
var fs = require('fs');
var path = require('path');

exports.temp = {
    s1: jade.compile(fs.readFileSync(path.join(__dirname, '../views', 's1.jade'))),
    s2: jade.compile(fs.readFileSync(path.join(__dirname, '../views', 's2.jade')))
}