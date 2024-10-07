import { useEffect } from "react"; // import the useEffect hook from react
import Card from "react-bootstrap/Card";

const MovieItem = (props) => {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie); // log the movie item to the console
  }, [props.mymovie]); // pass the movie item as a dependency

  return (
    // return the movie item as a Bootstrap card
    <Card>
      <Card.Header>{props.mymovie.Title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <img src={props.mymovie.Poster} alt="Movie Poster" />
          <footer className="blockquote-footer">{props.mymovie.Year}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
