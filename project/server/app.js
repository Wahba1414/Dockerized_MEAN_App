// Don't load local.env.js file in production environment.
if (process.env.NODE_ENV !== 'production') {
    console.log("requring local env file");
    
    const result = require('dotenv').config()

    if (result.error) {
      throw result.error
    }

}

// console.log("process.env: " , process.env)


// require the needed packages.
const express = require('express');
var path = require('path');
var gzippo = require('gzippo');
var Q = require('q');




// console.log("__dirname: " , __dirname);

//choose the listening port
const app = express();
const port = process.env.PORT || 8000;


//Express configurations and adding all app routes.
require('./express/config')(app);

//Add generic route to handle any unhandled ones.
app.get('/',(req, res) => {
  console.log("Receive new request..")
  res.sendFile( path.resolve( __dirname + "/../client/" + "index.html" ) );
});

//prmises to handle databases connections
console.log("connecting to databases && add the needed models to them ...");

var connectionsInfo = require('./models');

Q.all(connectionsInfo.promises).then(function(){
    console.log("All databases are connected now..");
        //listening...
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

},function(error){
    console.log("error happened during connecting to databases");

    //exit with failure
    process.exit(1)
})






