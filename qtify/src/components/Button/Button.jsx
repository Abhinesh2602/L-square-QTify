import React from "react";
import Styles from "./Button.module.css";

function Button({ children, variant }) {
  if (variant === "grid") {
    return <button className={Styles.gridButton}> {children}</button>;
  }
  return <button className={Styles.button}>{children}</button>;
}

export default Button;
