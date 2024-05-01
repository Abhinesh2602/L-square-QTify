import React, { useEffect } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./components/Card/cardData";
import styles from "./App.module.css";
import Section from "./components/Section/Section";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.background}>
        <Navbar />
        <Hero />
        <Section title={"Top Albums"} type={"album"} />
        <Section title={"New Albums"} type={"newAlbums"} />
        <Section title={"Songs"} type={"songs"} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
