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
  // console.log(res.body);
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    var templateData = {
      burgerData: burgerData
    };
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    // res.render("index", { burger_data: burgerData });
    res.render('index', templateData);
  });

});

router.post("/burger/create", function(req, res){
  console.log("post working");
  burger.create(req.body.burger_name, function(result){
    console.log("post result = " + result);
    res.redirect("/burger");
  });
});


router.put("/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;
    
    console.log("This is the condition in the putRoute", condition);
    // console.log("This is the conition: " + condition);
    
    burger.update({devoured: true}, condition, function(result){ 
        
        res.status(200).end();
    });
});

module.exports = router;