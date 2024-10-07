const MovieItem = (props) => {
  return (
    <div>
      <h2>{props.mymovie.Title}</h2>
      <p>{props.mymovie.Year}</p>
      <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
    </div>
  );
};

export default MovieItem;
