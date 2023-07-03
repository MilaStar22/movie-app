import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay, Controller} from 'swiper';
import { SwiperNavButtons } from "./SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = '307fd0a82be6c313814e4ab1e538e172';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
// const imgBigImgURL = "https://image.tmdb.org/t/p/w1280";


function MainSlider() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  async function fetchData() {
      axios.get(baseURL, {
        params: {
          api_key: apiKey,
          page: 1,
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
    fetchData()
  }, []);
  
  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => {
      if (index <= 5) {
        return <SwiperSlide key={index} className='one-slide'>
          <Link to={ "/movie/" + movie.id } >
            <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
            {/* <img className="slider_bg" src={imgBigImgURL + movie.poster_path} alt={movie.title} /> */}
          </Link>
        </SwiperSlide>
      }
      return null;
    });

    return (
      <div className='swiper_container'>
        <Swiper 
          onSwiper={setControlledSwiper}
          modules={[Navigation, Scrollbar, A11y, Autoplay, Controller]}
          spaceBetween={30}
          breakpoints= {{
            780: {
              width: 780,
              slidesPerView: 2,
            },
            1400: {
              width: 1400,
              slidesPerView: 3,
            },
          }}
          scrollbar={{ draggable: true }}
          // autoplay={{
          //   delay: 2500, 
          //   disableOnInteraction: false,
          // }}
        >
          {items}
        </Swiper>
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay, Controller]}
          controller={{ control: controlledSwiper }}
          spaceBetween={30}
        >
          {items}
          <SwiperNavButtons />
        </Swiper>
      </div>
    )
  }
}

export default MainSlider;