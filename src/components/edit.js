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
	return (
		<div>
			<h3>Hello from the Edit component!</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Add Movie Title: </label>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<label>Add Movie Year: </label>
					<input
						type="text"
						className="form-control"
						value={year}
						onChange={(e) => {
							setYear(e.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<label>Add Movie Poster: </label>
					<textarea
						type="text"
						className="form-control"
						value={poster}
						onChange={(e) => {
							setPoster(e.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<input
						type="submit"
						value="Add Movie"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};
