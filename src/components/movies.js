const Movies = (movielist) => {
  return props.movielist.map((movie) => (
    <MovieItem mymovie={movie} key={movie.imdbID} />
  ));
};

export default Movies;
