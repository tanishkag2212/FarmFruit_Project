require("../config/db");
let mongoose = require("mongoose")
let CateSchema = mongoose.Schema({
    category : String
    
})

let Cate = mongoose.model("category",CateSchema);
module.exports = Cate;