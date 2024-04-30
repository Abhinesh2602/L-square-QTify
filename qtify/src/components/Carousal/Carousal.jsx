import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousal.modules.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { CarousalButtonLeft } from "./CarousalButtonLeft/CarousalButtonLeft";
import { CarousalButtonRight } from "./CarousalButtonRight/CarousalButtonRight";
import data from "./../Card/cardData";

const Controls = ({ data }) => {
  let swiper = useSwiper();
  console.log(swiper);
  useEffect(() => {}, [data]);

  return <></>;
};

export const Carousal = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation, FreeMode }}
        slidesPerView={7}
        spaceBetween={5}
        allowTouchMove
      >
        <Controls data={data} />
        <CarousalButtonLeft />
        <CarousalButtonRight />
        {data.map((item) => (
          <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
