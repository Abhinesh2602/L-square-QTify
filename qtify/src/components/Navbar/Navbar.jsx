import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Search from "../SearchBar/SearchBar";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
