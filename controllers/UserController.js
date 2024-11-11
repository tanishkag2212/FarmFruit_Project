let routes = require("express").Router();
let User = require("../models/User")
let sha1 = require("sha1");
let jwt = require ("jsonwebtoken");
const { response } = require("express");

routes.post("/signup",async(req,res)=>{
    req.body.password = sha1(req.body.password);
    await User.create(req.body);
    res.send({success : true});
});
routes.get("/",async(req,res)=>{
    let result = await User.find();
    res.send(result);
})
routes.get("/info",async(req,res)=>{
    // console.log(req.headers);
    let token = req.headers.authorization;
    let obj = jwt.decode(token,"hello");
    let id = obj.id;
    let result = await User.find({ _id : id }, "name email contact gender state city address ");
    res.send(result[0]);
})
routes.post("/update",async(req,res)=>{
    // console.log(req.header);
    let token = req.headers.authorization;
    let obj = jwt.decode(token,"hello");
    let  id = obj.id;
    await User.updateMany({_id : id},req.body);
    res.send({success : true, name : req.body.name});

    
})
routes.post("/changepass",async(req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token,"hello");
    let id = obj.id;
    let result = await User.find({_id :id});

    if(result[0].password == sha1(req.body.password))
    {
        let passobj = {password : sha1(req.body.repass)};
        await User.updateMany({_id : id}, passobj);
        res.send({success : true})
    }
    else{
        res.send({success : false})
    }
})

routes.get("/changestatus/:id/:status",async(req,res)=>{
    let id = req.params.id;
    let  status = req.params.status==1  ? 0 : 1;



    await User.updateMany({_id : id}, {status:status});
    res.send({success : true});

})

module.exports = routes;