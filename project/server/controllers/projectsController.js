'use strict';

//get the db connections.
var dbs = require('../models');

var controller = {};


controller.addNewProject = function(req,res){
    console.log("Inside controller.addNewProject function");

    var newProjectModel = new dbs.mean_template.connection.Project(req.body);
    newProjectModel.save().then(function(){
        res.send({success: true});
    },function(err){
        console.log("error happened inside controller.addNewProject function: " , err);
        res.status(500);
        res.send({success:false , msg:"error happened inside controller.addNewProject function"});
    })

    
}


controller.getAllProjects = function(req,res){
    console.log("Inside controller.getAllProjects function");

    dbs.mean_template.connection.Project.find({}).lean().exec().then(function(projects){
        res.send({
            success: true,
            projects: projects
        })
    },function(err){
        console.log("error happened inside controller.getAllProjects function: " , err);
        res.status(500);
        res.send({success:false , msg:"error happened inside controller.getAllProjects function"});
    })


}

module.exports = controller;