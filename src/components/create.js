const Create = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <h3>Hello from the Create component!</h3>
      <form onSubmit={handleSubmit()}>
        <div></div>
        <div>
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
};

export default Create;
