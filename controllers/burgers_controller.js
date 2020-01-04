const express = require("express");
const router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name"
    ], [
        req.body.name
    ],  function(result){
        res.json({ id: result.insertId});
    });   
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("router . put")

    var condition = "id = " + req.params.id;

    burger.update({
        eaten: req.body.eaten
    }, condition, function(result){
        if (result.changeRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.delete(condition, function(result){
        if (result.changedRow === 0) {
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;