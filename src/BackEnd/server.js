const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

// get env vars
require("dotenv").config();

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
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to the database
mongoose.connect(process.env.DB_CONNECTION_STRING);
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
// create a model from the schema, save it as Movie
const Movie = mongoose.model("Movie", movieSchema);

// route to add a new movie
app.post("/api/movies", async (req, res) => {
	const { title, year, poster } = req.body;
	const newMovie = new Movie({ title, year, poster });
	await newMovie.save();
	res.status(201).json({
		message: "Movie created successfully",
		movie: newMovie,
	});
});

// route for getting a single movie from db to be edited
app.get("/api/movie/:id", async (req, res) => {
	let movie = await Movie.findById({ _id: req.params.id });
	res.send(movie);
});

// route to update a movie in db after editing
app.put("/api/movie/:id", async (req, res) => {
	let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.send(movie);
});

// route to get all movies
app.get("/api/movies", async (req, res) => {
	try {
		const movies = await Movie.find({});
		res.status(200).json({ movies });
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch movies" });
	}
});

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

// listen on port 4000, respond to requests
app.listen(port, () => {
	// log a message to the console
	console.log(`Server is running on http://localhost:${port}`);
});
