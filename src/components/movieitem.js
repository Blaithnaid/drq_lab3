import { useEffect } from "react"; // import the useEffect hook from react
import Card from "react-bootstrap/Card";
// lets us route to the edit page
import { Link } from "react-router-dom"; // so that we can load edit/:id route

const MovieItem = (props) => {
	useEffect(() => {
		console.log("Movie Item:", props.mymovie); // log the movie item to the console
	}, [props.mymovie]); // pass the movie item as a dependency

	return (
		// return the movie item as a Bootstrap card
		<Card>
			<Card.Header>{props.mymovie.title}</Card.Header>
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<img
						src={props.mymovie.poster}
						alt="Movie Poster"
						style={{ maxHeight: "50%", maxWidth: "50%" }}
					/>
					<footer className="blockquote-footer">
						{props.mymovie.year}
					</footer>
					<Link
						to={"/edit/" + props.mymovie._id}
						className="btn btn-primary"
					>
						Edit
					</Link>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default MovieItem;
