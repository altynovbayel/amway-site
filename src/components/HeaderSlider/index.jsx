import React from 'react';
import  c from './HeaderSlider.module.scss'
import HeaderSlide from "./HeaderSlide";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import {headerSlideList} from "../../utils/list";



function HeaderSlider() {
  return (
    <div className={c.slider}>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          headerSlideList.map(item => (
            <SwiperSlide key={item.id}>
              <HeaderSlide {...item}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default HeaderSlider;