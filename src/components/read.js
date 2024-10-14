import { useEffect, useState } from "react";
import Movies from "./movies.js";
import axios from "axios";

const Read = () => {
  const data = [];
  const [movies, setMovies] = useState(data);

  useEffect(() => {
    axios // use axios to get the data from the JSONblob API
      .get("https://jsonblob.com/api/jsonblob/1287718524221775872")
      .then((response) => {
        // once the data is retrieved, set the movies state to the data
        console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // if there is an error, log it to the console
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
