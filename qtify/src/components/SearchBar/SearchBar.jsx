import React from "react";
import Styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search() {
  return (
    <div className={Styles.container}>
      <input
        name="search"
        className={Styles.SearchBar}
        placeholder="Search a album of your choice"
      />
      <button className={Styles.SearchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default Search;
