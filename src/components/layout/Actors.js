// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // const baseURL = 'https://api.themoviedb.org/3/person';
// // const apiKey = '307fd0a82be6c313814e4ab1e538e172';
// // // const imgBaseURL = "https://image.tmdb.org/t/p/w500";


// // function Actors() {
// //   const [actors, setActors] = useState(null);
// //   const [error, setError] = useState(null);
    
// //   async function fetchData() {
// //     axios.get(baseURL, {
// //       params: {
// //         api_key: apiKey,
// //         page: 1,
// //       }
// //     })
// //       .then(response => {
// //         console.log(response.data.results);
// //         setActors(response.data.results);
// //       })
// //       .catch(error => {
// //         setError(error.message);
// //       })
// //   }

// //   useEffect( () => {
// //     fetchData()
// //     // eslint-disable-next-line
// //   }, []);

// //   if (error) {
// //     return (<div className="error"><h2>{ error }</h2></div>)
// //   } 
// //     document.title = actors.name; // set movie title to page
// //     return (
// //       <>
// //         <div>
// //           <h1>Popular Actors</h1>
// //           <ul>
// //             {actors.map((actor) => (
// //               <li key={actor.id}>{actor.name}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       </>
// //     )
// // }

// // export default Actors;

// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import contactsbg from "../img/contacts-bg.png";

// // const baseURL = 'https://api.themoviedb.org/3/search/person';
// // const apiKey = '307fd0a82be6c313814e4ab1e538e172';


// // function Actors() {
// //   const [showText, setShowText] = useState(false);
// //   const [actors, setActors] = useState([]);
// //   const [error, setError] = useState(null);

// //   async function fetchData() {
// //     axios.get(baseURL, {
// //       params: {
// //         api_key: apiKey,
// //         page: 1,
// //       }
// //     })
// //       .then(response => {
// //         console.log(response.data.results);
// //         setActors(response.data.results);
// //       })
// //       .catch(error => {
// //         setError(error.message);
// //       })
// //   }

// //   useEffect(() => {
// //     fetchData()
// //     const timer = setTimeout(() => {
// //       setShowText(true);
// //     }, 1000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (error) {
// //     return (
// //       <div className="error">
// //         <h2>{error}</h2>
// //       </div>
// //     );
// //   } else {
// //     const actorItems = actors.map((actor, index) => (
// //       <li key={index} className="actor">
// //           {actor.name}
// //       </li>
// //     ));
// //     console.log(actors);


// //     return (
// //       <div className="contacts_wrapper">
// //         <div className="contacts">
// //           <img src={contactsbg} alt="background" />
// //           <div className="contacts_content">
// //             <h1 className={`hidden ${showText ? 'appear' : ''}`}>Contacts Us</h1>
// //             <div className="subtitle">
// //               {actorItems}
// //               {/* <Link to={'/'}>Home</Link>
// //               <span>|</span>
// //               <Link to={'/'}>Contacts</Link> */}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Actors;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import contactsbg from "../img/contacts-bg.png";

// const baseSearchActorsURL = 'https://api.themoviedb.org/3/search/person';
// // const baseActorsURL = 'https://api.themoviedb.org/3/person';
// const apiKey = '307fd0a82be6c313814e4ab1e538e172';
// const actorsBaseURL = "https://image.tmdb.org/t/p/w500";


// function Actors() {
//   const [search, setSearch] = useState('');
//   const [actors, setActors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showText, setShowText] = useState(false);

//   async function fetchData() {
//     try {
//       const response = await axios.get(baseSearchActorsURL , {
//         params: {
//           api_key: apiKey,
//           // person: actors,
//           query: search,
//         }
//       });
//       setSearch(response.data.results);
//       console.log(response.data.results);
//       setActors(response.data.results);
//       console.log(response.data.results);
//       setLoading(false); // Set loading to false after data is fetched
//     } catch (error) {
//       setError(error.message);
//       setLoading(false); // Set loading to false in case of an error
//     }
//   }

//   useEffect(() => {
//     fetchData();
//     const timer = setTimeout(() => {
//       setShowText(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (error) {
//     return (
//       <div className="error">
//         <h2>{error}</h2>
//       </div>
//     );
//   } else {
//     const actorItems = actors.map((actor, index) => (
//       <li key={index} className="actor">
//         {actor.name}
//       </li>
//     ));
//     console.log(actors);

//     return (
//       <div className="contacts_wrapper">
//         <div className="contacts">
//           <img src={contactsbg} alt="background" />
//           <div className="contacts_content">
//             {actorItems}
//             <h1 className={`hidden ${showText ? 'appear' : ''}`}>Contacts Us</h1>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <div className="subtitle"> 
//                 {actors.length > 0 ? actorItems : <p style={{ color: 'white' }}> No actors found.</p>};  {/* {error message if API is not correct} */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Actors;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

