const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// this function is used to serve static files
app.use(express.static("public"));

// this function is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
	// if there is an error, this will catch it and send a 500 status code
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

app.get("/api/movies", (req, res) => {
	// this is a mock api, returning the movies arr ay from last week
	const movies = [
		{
			Title: "Avengers: Infinity War",
			Year: "2018",
			imdbID: "tt4154756",
			Type: "movie",
			Poster: "https://example.com/poster1.jpg",
		},
		{
			Title: "Captain America: Civil War",
			Year: "2016",
			imdbID: "tt3498820",
			Type: "movie",
			Poster: "https://example.com/poster2.jpg",
		},
		{
			Title: "World War Z",
			Year: "2013",
			imdbID: "tt0816711",
			Type: "movie",
			Poster: "https://example.com/poster3.jpg",
		},
	];
	res.status(201).json({ movies });
});

// listen on port 4000, respond to requests
app.listen(port, () => {
	// log a message to the console
	console.log(`Server is running on http://localhost:${port}`);
});
