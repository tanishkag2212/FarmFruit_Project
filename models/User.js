require("../config/db");

let mongoose = require("mongoose")
let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    gender : String,
    state : String,
    city : String,
    contact : String,
    createdAt : {
        type : String,
        default : Date.now()
    },
    status : { type : Number,default : 1}
})
let User = mongoose.model("user",UserSchema);
module.exports = User;