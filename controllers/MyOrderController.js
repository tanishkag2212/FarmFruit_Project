let routes = require("express").Router();
let Order = require("../models/Order");
let jwt = require("jsonwebtoken")

routes.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hello");
    let id = obj.id;
    let result = await Order.find({ user_id: id }).populate("user_id").populate("product_id").exec();
    // console.log(result);
    res.send(result);
})

module.exports = routes;
