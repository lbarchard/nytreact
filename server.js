
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Article models
var Article = require("./models/article.js");
// Our scraping tools
var request = require("request");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_1bn0drsh:d1p8qajja1p4dfpl2urbabpsom@ds153521.mlab.com:53521/heroku_1bn0drsh");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// *************  Routes ************//
// This will get the articles we saved to the mongoDB
app.get("/saved", function(req, res) {
  Article.find({}, function(error, doc) {
    if (error) {console.log(error)}
    else {res.json(doc)}
  });
});

// Save a new article to the collection
app.post("/saved", function(req, res) {
	var newArticle = new Article(req.body);
	newArticle.save(function(error, doc) {
		if (error) {console.log(error)}
		else {res.send(doc)}
	});
});

app.delete("/saved/:id", function(req, res) {
	Article.find({ _id: req.params.id }).remove(function(error, doc) {
		if (error) {console.log(error)}
		else {res.send({result: "success"})}
	});
});


// *************  Routes ************//
// This will get the articles from NYT
app.get("/articles/:topic/:start/:end", function(req, res) {
	console.log(req.params.topic)
	console.log(req.params.start)
	console.log(req.params.end)
	request.get({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		qs: {
		'api-key': "90c54821482c40c8bf03b3f3710dfede",
		'q': req.params.topic,
		'begin_date': req.params.start,
		'end_date': req.params.end,
		'sort': "newest"
  		},
	}, function(err, response, body) {
	const minimalResponse = JSON.parse(body).response.docs.map(function(data) {
		return {
			web_url: data.web_url,
			title: data.headline.main,
		}
	});
	{res.json(minimalResponse)}
	})


});


// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});
