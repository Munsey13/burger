const express = require("express");
const router = express.Router();

var burger = require("../models/burger.js");


    
router.get("/", function(req, res) {
    burger.all(function(burgerData) {
        let hbsObject = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", { burger_data:
        burgerDats });
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create([
        req.body.burger_name,
    ], function(result) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
   
    burger.update(req.params.id, function(result) {
        
        console.log(result);
       
        res.sendStatus(200);
      });
    });

module.exports = router;