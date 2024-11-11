const express = require("express");
const app = express();
const cors = require("cors")
const upload = require("express-fileupload")
const root = require("path").join(__dirname, "dist");

app.use(express.static(root));
app.use(express.static(__dirname+"/assets"));


app.use(express.json())
app.use(express.urlencoded({ extended : true}));
app.use(upload());
app.use(cors());

app.use(require("./allRoutes/routes"));

app.get("*", (req,res)=>{
    res.sendFile("index.html", {root});
})

let port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server running",port);
})
