import React from "react";
import Styles from "./Button.module.css";

function Button({ children }) {
  return <button className={Styles.button}>{children}</button>;
}

export default Button;
