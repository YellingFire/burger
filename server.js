// // App Setup

// // Require the following npm packages inside of the server.js file:
//     // express
//     var express = require('express');
//     const path = require('path');
//       // body-parser
//     var bodyParser = require('body-parser');
  
//     var middleware = require('middleware');

//     const reqLogger = require('morgan');
  
//     var PORT = process.env.PORT || 8080;
  
//   var app = express();

//   // console.log("This point hit");

//   app.use(reqLogger('dev'))
  
//   // parse application/x-www-form-urlencoded
//   app.use(bodyParser.urlencoded({ extended: true }));
  
//   // parse application/json
//   app.use(bodyParser.json());
  
//   // Set Handlebars.
//   var exphbs = require("express-handlebars");
  
//   app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//   app.set("view engine", "handlebars");
  
//   // Serve static content for the app from the "public" directory in the application directory.
//   app.use(express.static(path.join(__dirname, "public")));
  
//   // Import routes and give the server access to them.
//   var router = require("./controllers/burgers_controllers.js");
  
//   app.use(router);
//   console.log("This point hit");
//   // Start our server so that it can begin listening to client requests.
//   app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
// --------------------------------------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
const reqLogger = require('morgan');
var middleware = require('middleware');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(reqLogger('dev'))

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
app.use(express.static("."));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});