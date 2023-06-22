import { useEffect } from "react";
import { Link } from 'react-router-dom';
import error from "../img/404.png";

function ForbiddenPage () {
  useEffect( () => {
    document.title = '403 Error';
  }, []);

  return (
    <div className="error container">
      <img src={error} alt="403"/>
      <h1>Error 403</h1>
      <p>Sorry Page Not Found</p>
      <Link to={'/'}>
        <button>Back to Home</button>
      </Link>
    </div>
  )
}

export default ForbiddenPage;