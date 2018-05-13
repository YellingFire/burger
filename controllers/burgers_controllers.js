var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index

//local.host8080/
router.get("/", function(req, res) {
res.redirect("/burger");
//local.host8080/burgers
});

router.get("/burger", function(req, res) {
 // express callback response by calling burger.selectAllBurger
 console.log("This is the Console.log" + req.body);
 burger.all(function(burgerData) {
     var burgerObject = {
         burgers: burgerData
     };
   // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//    res.render("index", { burger_data: burgerData });
   res.render("index", burgerObject);
 });
});

module.exports = router;