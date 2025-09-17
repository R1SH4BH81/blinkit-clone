import React, { useContext } from "react";
import styles from "./styles/searchBar.module.css";
import { ProductsContext } from "../contextApi/productContext";
const SearchBar = () => {
  const { setQuery } = useContext(ProductsContext);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onChange={handleChange}
          className={styles.input}
          placeholder="search any product"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
