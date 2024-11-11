let routes = require("express").Router();
let Admin = require("../models/Admin");
let sha1  = require("sha1");


routes.get("/",async(req,res)=>{
      let result = await Admin.find();
    res.send(result);
})

routes.get("/:id",async(req,res)=>{
  let id = req.params.id;
  let result = await Admin.find({_id : id });
res.send(result[0]);
})


routes.post("/",async(req,res)=>{
  req.body.password = sha1(req.body.password);
 let result = await Admin.create(req.body);
  res.send({ success: true, result : result});
})

routes.delete("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Admin.deleteMany({_id : id});
  res.send({ success: true, result : result});
})

routes.put("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Admin.updateMany({_id : id},req.body);
  res.send({ success: true, result : result});
})
module.exports = routes;