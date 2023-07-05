import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const baseSearchActorsURL = 'https://api.themoviedb.org/3/search/person';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';

function SearchActors() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [actorSelected, setActorSelected] = useState(false);
  const navigate = useNavigate(); 

  async function fetchData(search) {
    try {
      const response = await axios.get(baseSearchActorsURL, {
        params: {
          api_key: apiKey,
          query: search,
        }
      });
      setActors(response.data.results);
      setActorSelected(false); // Reset actor selection when new data is fetched
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(search);
    setActorSelected(false); // Reset actor selection when a new search is submitted
    navigate("/"); // Redirect to the home page
  };

  const handleActorSelect = () => {
    setActorSelected(true); // Set actorSelected to true when an actor is selected
  };

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  } else {
    const actorItems = actors.map((actor, index) => (
      <div key={index} className="actor">
        <Link to={"/person/" + actor.id} onClick={handleActorSelect}>
          {actor.name}
        </Link>
      </div>
    ));

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={search}
              placeholder="...enter actor's name"
              autoFocus={true}
              contentEditable="true"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
        {!actorSelected && <div className="search-items">{actorItems}</div>}
      </>
    );
  }
}

export default SearchActors;
