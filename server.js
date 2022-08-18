const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get("/dice", function(req, res){
    res.sendFile(__dirname + '/public/dice.html');
});
app.post("/dice", function(req, res){
    var player_name =req.body.player2;
    console.log(player_name);
    res.sendFile(__dirname + '/public/dice.html');
});
app.listen(3000, function(){
    console.log("Server started on local port 3000");
});
