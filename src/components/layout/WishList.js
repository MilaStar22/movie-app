// import axios from "axios";
// import { useEffect, useState } from "react";
// import defaultImage from "../img/default_img.png";

// const baseURL = 'https://api.themoviedb.org/3/list/';
// const apiKey = 'b03d508a9e788070ca877f98f3f8bbba';
// const imgBaseURL = "https://image.tmdb.org/t/p/w500";


// function WishList() {
//   const [movies, setMovies] = useState(null);
//   const [error, setError] = useState(null);
    
//   async function fetchData() {
//     axios.post(baseURL, {
//       params: {
//         api_key: apiKey,
//       }
//     })
//       .then(response => {
//         // console.log(response.data);
//         setMovies(response.data);
//       })
//       .catch(error => {
//         setError(error.message);
//       })
//   }

//   useEffect( () => {
//     fetchData()
//     // eslint-disable-next-line
//   }, []);

//   if (error) {
//     return (<div className="error"> <h2>{ error }</h2></div>)
//   } else if (movies) {
//     return (
//       <div className="single-movie">
//         <img
//         src={movies.poster_path ? imgBaseURL + movies.poster_path : defaultImage}
//         alt={movies.title}
//         onError={(e) => {
//           e.target.src = defaultImage; // Fallback to default image if the poster image fails to load
//         }}
//       />
//         <div className="about_single_movie">
//           <h2 className="title">{movies.title}</h2>
//           <p className="movie_about">{movies.overview}</p>
//           <span>Movie budget: {Math.round(movies.budget)/100000} millons dollars</span>
//         </div>
//       </div>
//     )
//   }
// }

// export default WishList;