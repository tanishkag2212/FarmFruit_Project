let DB_URL = require("./constants");
require ("mongoose").connect(DB_URL)
.then(()=>{
    console.log("CONNECTED-------yes")
})
.catch((err)=>{
    console.log("NOT CONNECTED>.......No",err)
})
