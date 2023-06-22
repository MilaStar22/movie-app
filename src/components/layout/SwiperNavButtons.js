import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>&#8592;</button>
      <button onClick={() => swiper.slideNext()}>&#8594;</button>
    </div>
  );
};