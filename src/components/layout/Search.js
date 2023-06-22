import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const baseURL = 'https://api.themoviedb.org/3/discover/movie/';
const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';

function Search() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');


  // get data from API
  async function fetchData(search = null) {
      axios.get(baseSearchURL, {
        params: {
          api_key: apiKey,
          query: search,
        }
      })
        .then(response => {
          setMovies(response.data.results);
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
    fetchData(search)
  }
  
  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => 
    <div key={index} className="movie">
      <Link to={ "/movie/" + movie.id }>{movie.title}</Link>
    </div>)

    return (
      <>
        <form onChange={handleSubmit}>
          <label>
            <input 
              type="text"
              value={search}
              placeholder="Search"
              contentEditable="true"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
        <div className="search">{ items }</div>
      </>
    )
  }
}

export default Search;