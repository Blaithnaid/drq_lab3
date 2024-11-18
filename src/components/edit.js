import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
	// get the id from the URL
	let { id } = useParams();

	// use state for the form fields
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [poster, setPoster] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		// get the movie from the server
		axios
			.get("http://localhost:4000/api/movie/" + id)
			.then((response) => {
				// set our form fields to the values from the server
				setTitle(response.data.title);
				setYear(response.data.year);
				setPoster(response.data.poster);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// create a new movie object
		const newMovie = { id, title, year, poster };
		// send the movie object to the server, overwriting the existing movie
		axios
			.put("http://localhost:4000/api/movie/" + id, newMovie)
			// navigate to the read page
			.then((res) => {
				console.log(res.data);
				navigate("/read");
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Movie Title: </label>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Release Year: </label>
					<input
						type="text"
						className="form-control"
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Poster URL: </label>
					<input
						type="text"
						className="form-control"
						value={poster}
						onChange={(e) => setPoster(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="submit"
						value="Edit Movie"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};

export default Edit;
