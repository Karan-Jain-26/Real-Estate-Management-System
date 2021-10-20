//App config
const express = require("express");
const router = express.Router();

//Mongoose model config
const Property = require("../../models/Property");
const Comment = require("../../models/Comment");
const User = require("../../models/User");

router.get("/", (req, res)=>{
    const field = req.query.state;
    Property.find({}, (err, properties)=>{
        if(err){
            req.flash("error", err.message);
            return res.redirect("/real-estates");
        } else
            res.render("real_estates/search/rent", {properties: properties, field: field});
    });
});

router.get("/priceAsc", (req, res)=>{
    Property.find({}, (err, properties)=>{
        if(err){
            req.flash("error", err.message);
            return res.redirect("/real-estates");
        } else
            res.render("real_estates/sortPriceAsc/rent", {properties: properties});
    });
});

router.get("/priceDesc", (req, res)=>{
    Property.find({}, (err, properties)=>{
        if(err){
            req.flash("error", err.message);
            return res.redirect("/real-estates");
        } else
            res.render("real_estates/sortPriceDesc/rent", {properties: properties});
    });
});

router.get("/sqftAsc", (req, res)=>{
    Property.find({}, (err, properties)=>{
        if(err){
            req.flash("error", err.message);
            return res.redirect("/real-estates");
        } else
            res.render("real_estates/sortsqftAsc/rent", {properties: properties});
    });
});

router.get("/sqftDesc", (req, res)=>{
    Property.find({}, (err, properties)=>{
        if(err){
            req.flash("error", err.message);
            return res.redirect("/real-estates");
        } else
            res.render("real_estates/sortsqftDesc/rent", {properties: properties});
    });
});

//Router export config
module.exports = router;