# SimonGame-NodeJs-ExpressJS
Creating Simon Game with HTML, CSS, JavaScript, NodeJs and ExpressJS
open VS code
Go to Clone Git Repo and paste https://github.com/ndavilo/SimonGame-NodeJs-ExpressJS.git
Select a location in your local folder
Open integrated terminal on VS code
    ls -a
to view all the files both hidden and non-hidden files
    touch .gitignore
open .gitignore on vs code
    touch server.js
    touch index.html
inialise npm with server.js as starting point
    npm init
follow the instructions and press enter for defult values
install express and nodemon
    npm install express
    npm install -g nodemon or sudo npm install -g nodemon
    npm install body-parser
    npm install request
visit expressjs.com for documentations 
open server.js and add the following codes:

    const express = require('express');
    const bodyParser = require('body-parser');
    const request = require('request');

    const app = express();

    app.use(express.static("public"));

    app.get("/", function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    app.listen(3000, function(){
        console.log("Server started on local port 3000");
    });
 
 create a folder called public where all static files (css, js and image) will be housed