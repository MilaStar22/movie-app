import { useEffect } from "react";
import PopularFilms from "../layout/PopularFilms";

function PopularFilmsPage () {
  useEffect( () => {
    document.title = 'Popular';
  }, []);
  
  return (
    <div>
      <PopularFilms />
    </div>
  )
}

export default PopularFilmsPage;