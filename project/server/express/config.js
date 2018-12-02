'use strict';
var glob = require('glob');
var gzippo = require('gzippo');
var path = require('path');
var bodyParser = require('body-parser')


console.log("Inside Express config file");

module.exports = function (app) {
    // Add the needed middlewares to use.


    //Other configurations.
    // Serve scripts.
    app.use('/configs' , gzippo.staticGzip(__dirname + "/../../client/configs") );
    app.use('/controllers' , gzippo.staticGzip(__dirname + "/../../client/controllers") );
    app.use('/services' , gzippo.staticGzip(__dirname + "/../../client/services") );
    app.use('/styles' , gzippo.staticGzip(__dirname + "/../../client/styles") );

    app.use('/views' , gzippo.staticGzip(__dirname + "/../../client/views") );
    app.use('/bower_components' , gzippo.staticGzip( __dirname + "/../../bower_components") );

    //Serve images.
    app.use('/images/' , gzippo.staticGzip(__dirname + '/../../client/images') );

    //parsing http requests before handling.
    app.use(bodyParser.json({ limit: '100mb' , length:10000000000000000000000000}));
    
    app.use(bodyParser.urlencoded({
      extended: true
    }));


    //Adding APIs' routes.
    var routes = glob.sync(path.normalize(__dirname) + '/routes/**/*routes.js');
    routes.forEach(function (route) {
        console.log("route: " , route);

        try {
          require(route)(app);
        } catch (e) {
          console.log('route error: ', route, " ==> " ,e)
        }
    });
};
