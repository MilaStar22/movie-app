import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import defaultImage from "../img/default_img.png";
import sprite from "../img/sprites.svg";

const baseURL = 'https://api.themoviedb.org/3/person/';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";


function Actors() {
  const params = useParams();
  const id = params.id;
  const [actor, setActor] = useState(null);
  const [error, setError] = useState(null);
    
  async function fetchData() {
    axios.get(baseURL + id, {
      params: {
        api_key: apiKey,
      }
    })
      .then(response => {
        setActor(response.data);
      })
      .catch(error => {
        setError(error.message);
      })
  }

  useEffect( () => {
    fetchData(id)
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (actor) {
    document.title = actor.name; // set movie title to page
    return (
      <>
        <div className="actor_wrapper">
            <img
            src={actor.profile_path ? imgBaseURL + actor.profile_path : defaultImage}
            alt={actor.name}
            onError={(e) => {
              e.target.src = defaultImage; // Fallback to default image if the poster image fails to load
            }}
          />
            <div className="about_actor">
              <h2 className="name">{actor.name}</h2>
              <p className="genres">Genres: {actor.known_for_department}</p>
              <p className="birthday_date">{actor.birthday}</p>
              <p className="birthday_place">{actor.place_of_birth}</p>
              <p className="biography">{actor.biography}</p>
              <div className="rate"> <svg className="star_icon"><use href={sprite + "#star"} /></svg> { actor.popularity.toFixed(1) } / 100 </div>
            </div>
        </div>
      </>
    )
  }
}

export default Actors;

