'use strict';
var express = require('express')
var router = express.Router();

//requiring the needed controllers and modules.

var controller = require("../../controllers/projectsController");

console.log("Inside admin routes");

module.exports = function (app) {
  app.use('/admin', router);
};

//adding the needed routes.

router.post('/addNewProject', controller.addNewProject);

router.get('/getAllProjects', controller.getAllProjects);


