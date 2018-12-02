'use strict';

var fs = require('fs');
var path = require('path'); 


var filesUtils = {};

/*
@description: function to get files names for some directory based on folder path and filter string.
@folder: path for some folder relatively from the "server" folder.
@filter: string filtering the files based on it.

@returns: array of files' names
*/

filesUtils.getDirectoryFiles = function(folder,filter){
    console.log("Inside filesUtils.getDirectoryFiles function");
    var files = [];

    filter = filter || "";

    files = fs.readdirSync(path.join(__dirname, '../',folder)).filter(function (file) {
      return (file.indexOf(filter) > -1) 
    });

    return files;
}


filesUtils.addModelstoDatabase = function(db,folder,filter){
    console.log("Inside filesUtils.addModelstoDatabase function");

    var allSucceeded = true;

    //getting the files names.
    var models = filesUtils.getDirectoryFiles(folder, filter);

    //iterating on the models and add them to the db.
    models.forEach(function(file){
        var model = require(path.join(path.join(__dirname,'../' , folder), file))(db);
        
        if(model && model.modelName && model.schema){
            db[model.modelName] = model;
        }else{
            allSucceeded = false;
        }
    });

    return ({success: allSucceeded});
}






module.exports = filesUtils;