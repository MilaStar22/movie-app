import MoviesList from "../layout/MoviesList";
import { useEffect } from "react";

function MoviesPage () {
  useEffect( () => {
    document.title = 'Movies';
  }, []);

  return (
    <MoviesList />
  )
}

export default MoviesPage;