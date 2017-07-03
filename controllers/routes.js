// var express = require("express");
// var app = express();
// var router = express.Router();
var db = require("../models");

module.exports = function(app) {
app.get("/", function(req,res){
    // burger.all(function(data){
    //     console.log(data)
    //     res.render("index", { burgers: data })
    // });

    db.burger.findAll({}).then(function(data){
        res.render("index", { burgers: data })
        // res.json(data)
    })
    
});


app.put("/burger/update",function(req,res){
    // burger.update(req.body.burger_id, function(result){
    //     console.log(result);
    //     res.redirect("/");
    // });
    db.burger.update(
        { devoured : req.body.devored}, 
        { where: { id: req.body.id }
    
    }).then(function(data){
        // res.json(data)
        res.render("index", { burgers: data })
    })
});


app.post("/add", function(req,res){
    // burger.create(req.body.burger_name, function(result){
    //     console.log(result);
    //     res.redirect("/");
    // });

    db.burger.create({
        burger_name: req.body.text,

    }).the(function(data){
        // res.json(data);
        res.render("index", { burgers: data })

    })
});
// module.exports = router;
};