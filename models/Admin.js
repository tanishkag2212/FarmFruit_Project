require("../config/db");
let mongoose = require("mongoose")
let AdminSchema = mongoose.Schema({
    username : String,
    password : String
    
})

let Admin = mongoose.model("admin",AdminSchema);
module.exports = Admin;