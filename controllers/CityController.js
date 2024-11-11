let routes = require("express").Router();
let City = require("../models/City");

routes.get("/",async(req,res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

routes.get("/state/:a",async(req,res)=>{
    let s = req.params.a;
    let result = await City.find({ state : s});
    res.send(result);
})
module.exports = routes;