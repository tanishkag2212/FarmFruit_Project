require("../config/db");
let mongoose = require("mongoose")
let SubCateSchema = mongoose.Schema({
    category : String,
    subcategory : String
    
})

let SubCate = mongoose.model("subcategory",SubCateSchema);
module.exports = SubCate;