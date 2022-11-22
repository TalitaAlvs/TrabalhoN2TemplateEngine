const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/HTML/index.html");
});

app.listen(3000, function(){
    console.log("Servidor Rodando");
});
