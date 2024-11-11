require("../config/db");
let mongoose = require("mongoose")
let ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    detail : String,
    subcategory : String,
    quantity : Number,
    discount : Number,
    image : String,
    status : { type : Number, default : 1 },
    createAt : { type : Date, default : new Date()}
})

let Product = mongoose.model("product",ProductSchema);
module.exports = Product;