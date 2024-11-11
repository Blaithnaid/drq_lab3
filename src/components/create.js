import { useState } from "react";
import axios from "axios";

const Create = () => {
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [poster, setPoster] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// log details from the form
		console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
		// create a new movie object
		const movie = {
			Title: title,
			Year: year,
			Poster: poster,
		};

		axios
			.post("http://localhost:4000/api/movies", movie)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.data));
	};
	return (
		<div>
			<h3>Hello from the Create component!</h3>
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

export default Create;
