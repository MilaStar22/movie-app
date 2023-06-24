import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';

function Search() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filmSelected, setFilmSelected] = useState(false);
  const navigate = useNavigate(); // Added useNavigate hook for redirection
  // const [redirectToHome, setRedirectToHome] = useState(false);

  async function fetchData(search = null) {
      axios.get(baseSearchURL, {
        params: {
          api_key: apiKey,
          query: search,
        }
      })
        .then(response => {
          setMovies(response.data.results);
          setFilmSelected(false); // Reset film selection when new data is fetched
        })
        .catch(error => {
          setError(error.message);
        })
  };

  useEffect( () => {
    fetchData(search)
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchData(search);
    setFilmSelected(false); // Reset film selection when a new search is submitted
    navigate("/");
  }

  const handleFilmSelect = () => {
    setFilmSelected(true); // Set filmSelected to true when a film is selected
  }
  
  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => 
    <div key={index} className="movie">
      <Link to={ "/movie/" + movie.id } onClick={handleFilmSelect}>{movie.title}</Link>
    </div>)

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="text"
              value={search}
              placeholder="Search"
              autoFocus={true}
              contentEditable="true"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
        {!filmSelected && <div className="search-items">{items}</div>}
      </>
    )
  }
}

export default Search;