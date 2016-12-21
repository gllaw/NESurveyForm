var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));	

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var route = require("./routes/index.js")(app); 					//put all our routes in a separate /folder/file_name.js

var server = app.listen(6789, function(){
	console.log("surveyForm is listening on port 6789");
});