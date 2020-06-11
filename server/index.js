var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup

//Helpers
var apiHelpers = require("./helpers/apiHelpers.js");

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + "/../client/dist"));

//***********************************************************************************************************************

/*
Use the routes below to build your application:

|      URL         | HTTP Verb |  Result                                                     |
| :------------:   | :-------: |------------------------------------------------------:      |
|     /genres      |   GET     |  Respond with JSON of all genres                            |
|     /search      |   GET     |  Respond with JSON of all movies by the selected genre      |
|     /save        |   POST    |  Save selected movie as favorite                            |
|     /delete      |   POST    |  Remove selected movie as favorite                          |

*/

// //***********************************************************************************************************************

// app.get("/search", function(req, res) {
//   // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
//   // and sort them by votes (worst first) using the search parameters in themoviedb API
//   // do NOT save the results into the database; render results directly on the page
// });

// app.post("/save", function(req, res) {
//   //save movie as favorite into the database
// });

// app.post("/delete", function(req, res) {
//   //remove movie from favorites into the database
// });

//***********************************************************************************************************************
//OPTION 2: Use Express Router

//IF you decide to go with this OPTION 2, delete OPTION 1 to continue

//Routes
const movieRoutes = require("./routes/movieRoutes.js");

//Use routes
app.use("/movies", movieRoutes);

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
