import React from "react";
import Logoimg from "../../assets/Logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoDiv}>
      <img src={Logoimg} alt="logo" width={67} />
    </div>
  );
}

export default Logo;
