const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// connect to the database
mongoose.connect(process.env.MONGO_CONNECTION_STRING);
// check if the connection is successful
mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB");
});

// this function is used to allow cross-origin requests
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// this function is used to serve static files
app.use(express.static("public"));

// this function is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
	// if there is an error, this will catch it and send a 500 status code
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

const movies = [
	{
		Title: "Avengers: Infinity War",
		Year: "2018",
		imdbID: "tt4154756",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
	},
	{
		Title: "Captain America: Civil War",
		Year: "2016",
		imdbID: "tt3498820",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
	},
	{
		Title: "World War Z",
		Year: "2013",
		imdbID: "tt0816711",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
	},
];

app.get("/api/movies", (req, res) => {
	// this is a mock api, returning the movies arr ay from last week
	res.status(201).json({ movies });
});

app.post("/api/movies", (req, res) => {
	// push the new movie into the movies array
	movies.push(req.body);
	res.status(201).json({ movie: req.body });
});
// listen on port 4000, respond to requests
app.listen(port, () => {
	// log a message to the console
	console.log(`Server is running on http://localhost:${port}`);
});
