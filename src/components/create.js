import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
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
      </form>
    </div>
  );
};

export default Create;
