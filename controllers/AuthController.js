const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
routes.post("/",async(req,res)=>{
    // console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;
    let result = await User.find({email : username });
    console.log(result);
    if(result.length == 1)
    {
        if(result[0].password == sha1(password))  
            {
              if(result[0].status==1)
              {
                let userobj = { id : result[0]._id, name : result[0].name,email : result[0]}
                let x = jwt.sign(userobj, "hello")

               res.send({ success : true, token : x, name : result[0].name })

              }
              else{
                res.send({ success : false, errType : 3})
              }
            }              
            else{
                res.send({ success : false, errType : 2 })
               
            }
    }
    else{
        res.send({ success : false, errType : 1 })
    }
})
module.exports = routes;