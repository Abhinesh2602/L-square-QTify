import React from "react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import styles from "./CarousalButtonLeft.modules.css";

export const CarousalButtonLeft = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};
