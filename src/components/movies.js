import MovieItem from "./movieitem.js";

const Movies = (props) => {
  return props.movielist.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID} />
  ));
};

export default Movies;
