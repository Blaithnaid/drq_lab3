const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());

require("dotenv").config();

// connect to the database
mongoose.connect(process.env.MONGO_CONNECTION_STRING);
// check if the connection is successful
mongoose.connection.on("connected", () => {
	console.log("Connected to MongoDB");
});

// this outlines how MongoDB should store the data
const movieSchema = new mongoose.Schema({
	title: String,
	year: String,
	poster: String,
});

// create a model from the schema, save it as moviesDb.
const Movie = mongoose.model("moviesDb", movieSchema);

// create an array to store the movies
const movies = [];

// this adds a new movie to the database
app.post("/api/movies", async (req, res) => {
	// get the title, year, and poster from the request body.
	// this comes from the form in the front end
	const { title, year, poster } = req.body;

	// use the info from the form to create a new movie via the Movie model
	const newMovie = new Movie({ title, year, poster });
	// save the new movie to the database
	await newMovie.save();

	// send a response to the front end
	res.status(201).json({
		message: "Movie created successfully",
		movie: newMovie,
	});
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

app.get("/api/movies", async (req, res) => {
	const movies = await Movie.find({});
	res.json(movies);
});

// listen on port 4000, respond to requests
app.listen(port, () => {
	// log a message to the console
	console.log(`Server is running on http://localhost:${port}`);
});
