import styles from "./styles/hero.module.css";
import { HeroHeader } from "../components/HHeader";
import HeroWelcome from "../components/HWelcome";
import SearchBar from "../components/HSearch";
const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <HeroHeader />
      <SearchBar />
      <HeroWelcome />
    </div>
  );
};

export default Hero;
