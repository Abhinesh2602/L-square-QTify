import React from "react";
import styles from "./Hero.module.css";
import headphone from "./../../assets/vibrating-headphone.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes </h1>
      </div>
      <img src={headphone} alt="headphone" className={styles.heroImage} />
    </section>
  );
}

export default Hero;
