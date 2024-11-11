require("../config/db");

let mongoose = require("mongoose");

let OrderSchema = mongoose.Schema({
    product_id : { type : mongoose.Schema.Types.ObjectId, ref : "product"},
    user_id : { type : mongoose.Schema.Types.ObjectId,ref : "user"},
    address : String,
    contact : String,
    payment_mode : String,
    // crateAt : { type : Date, default : new Date()}
})

let Order = mongoose.model("order", OrderSchema);
module.exports = Order;