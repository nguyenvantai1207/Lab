const express = require('express');

const app = express();

app.get("/" , (req,res) => {
    res.send("ok");
});

app.get("/hello" , (req,res) => {
    res.send("xinchao");
})

app.listen(5000,()=>{
    console.log('server listen on port 5000');
})