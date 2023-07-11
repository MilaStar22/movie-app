import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';

function SearchFilm() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filmSelected, setFilmSelected] = useState(false);

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
  }

  const onClear = () => {
    setSearch(''); // Clear the input when a film was selected
  }
  
  const refreshPage = () => {
    window.location.reload(false); // Refresh the page after the film selected
  }

  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => 
    <div key={index} className="movie">
      <Link to={ "/movie/" + movie.id } onClick={onClear}>{movie.title}</Link>
    </div>)

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="text"
              value={search}
              placeholder="...Search film"
              autoFocus={true}
              contentEditable="true"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
        {!filmSelected && <div className="search-items" onClick={refreshPage}>{items}</div>}
      </>
    )
  }
}

export default SearchFilm;