import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Scrollbar, A11y]);

const ResizeSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1400) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true }}
    >
      {/* Your swiper slides */}
    </Swiper>
  );
};

export default ResizeSwiper;
