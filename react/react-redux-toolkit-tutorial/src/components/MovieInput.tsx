import { useState } from "react";
import { addMovie } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  return (
    <>
      <label htmlFor="movie-input">Movie Name:</label>
      <input
        id="movie-input"
        onChange={(e) => setNewMovie(e.currentTarget.value)}
        value={newMovie}
      />

      <button onClick={handleAddMovie}>Add Movie</button>
    </>
  );
};
