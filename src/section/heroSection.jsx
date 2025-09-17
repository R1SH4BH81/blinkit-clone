import React from "react";
import styles from "./styles/hero.module.css";
import { heroHeader } from "../components/heroHeader";
import { heroWelcome } from "../components/heroWelcome";
import { searchBar } from "../components/searchBar";
const heroSection = () => {
  return (
    <div className={styles.heroSection}>
      <heroHeader />
      <searchBar />
      <heroWelcome />
    </div>
  );
};

export default heroSection;
