import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import banner1 from "./banner1.png";
import banner2 from "./banner2.png";

// Styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "../Main.sass";
import "./Banner.sass";

// install Swiper components
SwiperCore.use([Pagination]);

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img className="banner__img" src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner__img" src={banner1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
