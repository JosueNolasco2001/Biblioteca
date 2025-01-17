import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import CV1_1 from "../img/cv1.jpg";
import CV1_2 from "../img/cv1-2.jpg";
import CV1_3 from "../img/cv1-3.jpg";
import CV1_4 from "../img/cv1-4.jpg";
import CV1_5 from "../img/cv1-5.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={CV1_1}/></SwiperSlide>
        <SwiperSlide><img src={CV1_2}/></SwiperSlide>
        <SwiperSlide><img src={CV1_3}/></SwiperSlide>
        <SwiperSlide><img src={CV1_4}/></SwiperSlide>
        <SwiperSlide><img src={CV1_5}/></SwiperSlide>

     
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}