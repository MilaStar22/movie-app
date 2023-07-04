import { useEffect } from "react";
import Actors from "../layout/Actors";

function ActorsPage () {
  useEffect( () => {
    document.title = 'Actors';
  }, []);
  
  return (
    <div>
      <Actors />
    </div>
  )
}

export default ActorsPage;