import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import styles from "./CarousalButtonRight.modules.css";

export const CarousalButtonRight = () => {
  const swiper = useSwiper();
  const [isEnd, setisEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setisEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};
