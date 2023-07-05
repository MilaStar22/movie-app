import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchActors from "./SearchActors";

const baseURL = 'https://api.themoviedb.org/3/movie/popular';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";


function PopularFilms() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
    
  async function fetchData() {
    axios.get(baseURL, {
      params: {
        api_key: apiKey,
        page: 1,
      }
    })
      .then(response => {
        setMovies(response.data.results.reverse());
      })
      .catch(error => {
        setError(error.message);
      })
  };

  useEffect( () => {
    fetchData()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const list = document.querySelector('.popular ul');
    const cards = list ? list.getElementsByTagName('li') : [];

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add('card-turn-effect');
    }
  }, [movies]);

  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => {
      if (index <= 11) {
        return <li key={index}>
          <Link to={ "/movie/" + movie.id } >
            <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
            <button>Watch now</button>
          </Link>
        </li>
      }
      return null;
    });

    return (
      <>
        <div>
          <SearchActors />
        </div>
        <div className="popular">
          <ul>{items}</ul>
        </div>
      </>
    )
  }
}

export default PopularFilms;