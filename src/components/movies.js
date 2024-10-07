import MovieItem from "./movieitem.js";

const Movies = (props) => {
  return props.movielist.map(
    (
      movie // get movies from movielist thru props
    ) => (
      <MovieItem mymovie={movie} key={movie.imdbID} /> // pass the movie item to the MovieItem component
    )
  );
};

export default Movies;
