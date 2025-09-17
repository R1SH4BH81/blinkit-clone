import styles from "./styles/heroWelcome.module.css";
const HeroWelcome = () => {
  return (
    <div className={styles.welcomeSection}>
      <h2 className={styles.welcomeText}>welcome</h2>
      <p className={styles.welcomeSubtext}>order now to avail exciting offer</p>

      <div className={styles.offerCards}>
        <div className={styles.offerCard}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.OKWRIsa_ciY6KvZbkZtT1QHaF_?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Free Coke"
            className={styles.offerImage}
          />
          <div className={styles.offerText}>
            <div className={styles.offerTitle}>Free Coke</div>
            <div className={styles.offerDesc}>on order above ₹299</div>
          </div>
        </div>

        <div className={styles.offerCard}>
          <img
            src="https://assets.website-files.com/5acc07fc6634d231ac4bcca6/6320a021ea9bf3420fa3fd61_food-delivery-man-with-scooter-holding-fast-food-box-mobile-phone-background-fast-food-delivery-service-cartoon-design-concept-vector-illustration_88114-304.jpeg"
            alt="Free Delivery"
            className={styles.offerImage}
          />
          <div className={styles.offerText}>
            <div className={styles.offerTitle}>Free Delivery</div>
            <div className={styles.offerDesc}>on order above ₹99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWelcome;
