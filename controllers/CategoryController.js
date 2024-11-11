let routes = require("express").Router();
let Cate = require("../models/Category");

routes.get("/",async(req,res)=>{
      let result = await Cate.find();
    res.send(result);
})

routes.get("/:id",async(req,res)=>{
  let id = req.params.id;
  let result = await Cate.find({_id : id });
res.send(result[0]);
})


routes.post("/",async(req,res)=>{
 let result = await Cate.create(req.body);
  res.send({ success: true, result : result});
})

routes.delete("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Cate.deleteMany({_id : id});
  res.send({ success: true, result : result});
})

routes.put("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Cate.updateMany({_id : id},req.body);
  res.send({ success: true, result : result});
})
module.exports = routes;