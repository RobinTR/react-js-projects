import { removeMovie } from "../features/movies/movieSlice";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

export const MovieList = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id: number) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name}{" "}
          <button
            onClick={() => {
              handleRemoveMovie(movie.id);
            }}
          >
            Delete Movie
          </button>
        </div>
      ))}
    </div>
  );
};
