import express = require("express");

const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("HELLOWORLDs"); 
})

app.listen((port),()=>{
    console.log(`Port runtime : ${port}`)
})
