import MovieItem from "./movieitem.js";

const Movies = (props) => {
	return props.movielist.map(
		(
			movie // get movies from movielist thru props
		) => (
			<MovieItem key={movie._id} mymovie={movie} /> // pass the movie item to the MovieItem component with a unique key
		)
	);
};

export default Movies;
