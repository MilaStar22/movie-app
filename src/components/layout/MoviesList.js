import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import defaultImage from "../img/default_img.png";
import sprite from "../img/sprites.svg";

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [genre_ids, setGenreIds] = useState([]);
  const [genre, setGenre] = useState('');


  // get data from API
  async function fetchData(currentPage, search = null) {
    axios.get(genresURL, {
      params: {
        api_key: apiKey,
      }
    })
      .then(response => {
        setGenreIds(response.data.genres);
      })
      .catch(error => {
        setError(error.message);
      })
    
    if (!search) {
      axios.get(baseURL, {
        params: {
          api_key: apiKey,
          page: currentPage,
          with_genres: genre,
        }
      })
        .then(response => {
          setMovies(response.data.results);
          let totalPages = response.data.total_pages;
          if (totalPages && totalPages <= 500) {
            setTotalPages(totalPages);
          } else {
            setTotalPages(500);
          }
        })
        .catch(error => {
          setError(error.message);
        })
    } else if (search) {
      axios.get(baseSearchURL, {
        params: {
          api_key: apiKey,
          page: currentPage,
          query: search,
        }
      })
        .then(response => {
          setMovies(response.data.results);
          let totalPages = response.data.total_pages;
          if (totalPages && totalPages <= 500) {
            setTotalPages(totalPages);
          } else {
            setTotalPages(500);
          }
        })
        .catch(error => {
          setError(error.message);
        })
    }
  };

  useEffect( () => {
    fetchData(page)
      // eslint-disable-next-line
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value, search, genre);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchData(page, search, genre)
  }
  
  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies && genre_ids) {
    const items = movies.map((movie, index) => {
      let genre = [];
      let genreIds = movie.genre_ids;
      for (let i = 0; i < genreIds.length; i++) {
        let id = genreIds[i];
        for (let q = 0; q < genre_ids.length; q++) {
          let api_id = genre_ids[q].id;
          if (id === api_id) {
            genre.push(genre_ids[q].name);
          }
        }
      }
      genre = genre.join(" / ").toString();
      return (
        <div key={index} className="movie">
          <img
            src={movie.poster_path ? imgBaseURL + movie.poster_path : defaultImage}
            alt={movie.title}
            onError={(e) => {
              e.target.src = defaultImage;
            }}
          />
          <div className="about">
            <h2>{movie.title}</h2>
            <p>{genre}</p>
          </div>
          <div className="favorite">
            <Link to={ "/movie/" + movie.id }> More </Link>
            <button to={'/movie/' + movie.id}>
              <svg className="svg"><use href={sprite + "#favorite"} /></svg>
            </button>
          </div>
        </div>
      )
    });
    const genre_option = genre_ids.map((genre, index) => 
      <option key={index} value={genre.id}>{genre.name}</option>)

    return (
      <>
        <form onSubmit={handleSubmit} className="search_form">
          <label>
            <input 
              type="text"
              placeholder="...enter film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <label>
            <select onChange={(e) => setGenre(e.target.value)}>
              {genre_option}
            </select>
          </label>
          <input type="submit" value="Search" />
        </form>
        <div className="movies container">{ items }</div>
        <div className="pagination">
          <Stack spacing={4}>
            <Typography>Current page: {page}</Typography>
            <Pagination count={total_pages} page={page} onChange={handleChange} color='primary'></Pagination>
          </Stack>
        </div>
      </>
    )
  }
}

export default MoviesList;