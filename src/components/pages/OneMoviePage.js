import SingleMovie from "../layout/SingleMovie";
import { useEffect } from "react";

function OneMoviePage () {
  useEffect( () => {
    document.title = 'Movie';
  }, []);

  return (
    <SingleMovie />
  )
}

export default OneMoviePage;