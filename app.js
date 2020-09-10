const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
	res.send("HELLO?");
});

app.listen(3000, function(){
	console.log("Server is up and running");
});