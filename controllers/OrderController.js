let routes = require("express").Router();
let Order = require("../models/Order");
let jwt = require("jsonwebtoken")

routes.post("/",async(req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hello");
    // console.log(obj);

    req.body.user_id = obj.id;
    await Order.create(req.body);
    res.send({ success : true});
})

routes.get("/",async(req,res)=>{
    let result = await Order.find({}).populate("user_id").populate("product_id").exec();
   res.send(result);
})

module.exports = routes;