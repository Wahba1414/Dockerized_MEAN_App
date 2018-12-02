'use strict';

var mongoose = require('mongoose');
var Q = require('q');

//rewuiring the needed modules.
var filesUtilis = require('../utilis/files_utilis');

console.log("Inside models index file");

//As a start: just connecting to one database.

console.log("process.env.DATABASESERVER_URL: " , process.env.DATABASESERVER_URL);

// connections' promises.
var connectionsDefers = [];
var connectionsPromises = [];
var connectionsCounter = 0;

//Object contains all connections info.
var connectionsInfo = {};

//Create some connection.
connectionsDefers.push(Q.defer());
connectionsPromises.push(connectionsDefers[connectionsCounter].promise);

connectionsInfo.mean_template = {};
connectionsInfo.mean_template.connection = mongoose.createConnection(process.env.DATABASESERVER_URL,{
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
});

connectionsInfo.mean_template.counter = connectionsCounter;

connectionsCounter++;


//Adding the needed models.
var results = filesUtilis.addModelstoDatabase(connectionsInfo.mean_template.connection,'models',"_model.js");
if(!results.success){
    console.log("there are some models have some problems")
    //exit with failure
    process.exit(1)
}

//Adding the needed events.
connectionsInfo.mean_template.connection.on('connected' , function(){
    console.log("mean_template db is connected now...");
    connectionsDefers[connectionsInfo.mean_template.counter].resolve();
});

connectionsInfo.mean_template.connection.on('error' , function(){
    console.log("mean_template has some connection error");
    connectionsDefers[connectionsInfo.mean_template.counter].reject();
});


connectionsInfo.promises = connectionsPromises

module.exports = connectionsInfo;


