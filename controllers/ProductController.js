let routes = require("express").Router();
let Product = require("../models/Product");
let path = require("path");

routes.get("/",async(req,res)=>{
      let result = await Product.find();
    res.send(result);
})

routes.get("/:id",async(req,res)=>{
  let id = req.params.id;
  let result = await Product.find({_id : id });
res.send(result[0]);
})


routes.post("/",async(req,res)=>{
  // console.log(req.body);
  // console.log(req.files);
  // return;
  let myfile = req.files.uploadimage;
  req.body.image = myfile.name;
  let imagepath = path.resolve()+"/assets/images/"+myfile.name;
  await myfile.mv(imagepath);

 let result = await Product.create(req.body);
  res.send({ success: true, result : result});
})

routes.delete("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Product.deleteMany({_id : id});
  res.send({ success: true, result : result});
})

routes.put("/:id",async(req,res)=>{
  let id = req.params.id;
 let result =  await Product.updateMany({_id : id},req.body);
  res.send({ success: true, result : result});
})
module.exports = routes;