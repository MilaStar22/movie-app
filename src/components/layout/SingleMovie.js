import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import defaultImage from "../img/default_img.png";
import DefaultVideo from "./DefaultVideo";
import sprite from "../img/sprites.svg";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";


function SingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [genre_ids, setGenreIds] = useState([]);

  const [isWatchVideoActive, setWatchVideoActive] = useState(false);
  function toggleWatchVideoActive() {
    setWatchVideoActive(!isWatchVideoActive);
  }
    
  async function fetchData() {
    axios.get(baseURL + id, {
      params: {
        api_key: apiKey,
      }
    })
      .then(response => {
        // console.log(response.data);
        setMovie(response.data);
        setGenreIds(response.data.genres);
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
  } else if (movie) {
    document.title = movie.title; // set movie title to page
    const items = genre_ids.map(genre => genre.name).join(" / ").toString();
    let genres = items;
    return (
      <>
        <div className="single-movie">
            <img
            src={movie.poster_path ? imgBaseURL + movie.poster_path : defaultImage}
            alt={movie.title}
            onError={(e) => {
              e.target.src = defaultImage; // Fallback to default image if the poster image fails to load
            }}
          />
            <div className="about_single_movie">
              <h2 className="title">{movie.title}</h2>
              <h4 className="genres"> { genres } </h4>
              <h5 className="release_date"> Released year: { movie.release_date.substring(0, 4) } </h5>
              <p className="movie_about">{movie.overview}</p>
              <span className="budget">Movie budget: {Math.round(movie.budget)/100000} millions dollars</span>
              <div className="rate"> <svg className="star_icon"><use href={sprite + "#star"} /></svg> { movie.vote_average.toFixed(1) } / 10 </div>
            </div>
        </div>
        <div className="video_container">
          <button onClick={toggleWatchVideoActive}>Watch video</button>
          <div className={isWatchVideoActive ? 'video-active' : 'video-none'}>
            <DefaultVideo embedId="giE-U4zwPZU"/>
          </div>
        </div>
      </>
    )
  }
}

export default SingleMovie;