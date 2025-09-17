import styles from "./styles/hero.module.css";
import { HeroHeader } from "../components/HeroHeader";
import HeroWelcome from "../components/HeroWelcome";
import SearchBar from "../components/SearchBar";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <HeroHeader />
      <SearchBar />
      <HeroWelcome />
    </div>
  );
};

export default HeroSection;
