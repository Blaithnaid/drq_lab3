import { useEffect, useState } from "react";
import Movies from "./movies.js";
import axios from "axios";

const Read = () => {
  const data = [];
  const [movies, setMovies] = useState(data);

  useEffect(() => {
    axios
      .get("https://jsonblob.com/api/jsonblob/1287718524221775872")
      .then((response) => {
        console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    // return the Read component, containing the Movies component, into which we pass the movies data
    <div>
      <h3>Hello from the Read component!</h3>
      <Movies movielist={movies} />
    </div>
  );
};

export default Read;
