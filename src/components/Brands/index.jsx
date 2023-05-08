import React from 'react';
import c from './Brands.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {brandsList} from "../../utils/list";

function Brands() {
 
  
  return (
    <div className={c.brands}>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className={c.my_swiper}
        breakpoints={{
          425:{
            slidesPerView: 2
          },
          768:{
            slidesPerView: 4
          },
          1024:{
            slidesPerView: 6
          }
        }}
      >
        {
          brandsList.map((el, id) => (
            <SwiperSlide key={id}>
              <img src={el} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Brands;