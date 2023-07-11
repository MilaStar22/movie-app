import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import defaultImage from "../img/default_img.png";

const imgBaseURL = "https://image.tmdb.org/t/p/w500";

function WishList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (movie) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favMovie) => favMovie.id !== movie.id));
  };

  return (
    <div className='wish_list_wrapper container'>
      <h2>My Wish List</h2>
      {favorites.length === 0 ? (
        <p>No favorites movies. Add some!</p>
      ) : (
        favorites.map((movie) => (
          <div className='wish_list_movies'>
            <div key={movie.id} className='movie_add'>
              <img
                src={movie.poster_path ? imgBaseURL + movie.poster_path : defaultImage}
                alt={movie.title} />
              <h3>{movie.title}</h3>
              <div className="favorite">
                <Link to={ "/movie/" + movie.id }> More </Link>
                <button onClick={() => removeFromFavorites(movie)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default WishList;