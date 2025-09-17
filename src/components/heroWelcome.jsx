import styles from "./styles/heroWelcome.module.css";
const HeroWelcome = () => {
  return (
    <div className={styles.welcomeSection}>
      <h2 className={styles.welcomeText}>welcome</h2>
      <p className={styles.welcomeSubtext}>order now to avail exciting offer</p>

      <div className={styles.offerCards}>
        <div className={styles.offerCard}>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/cake-3d-icon-download-in-png-blend-fbx-gltf-file-formats--birthday-dessert-sweet-food-pack-kitchen-icons-8570317.png"
            alt="Free Cake"
            className={styles.offerImage}
          />
          <div className={styles.offerText}>
            <div className={styles.offerTitle}>Free Cake Cuts</div>
            <div className={styles.offerDesc}>on order above ₹299</div>
          </div>
        </div>

        <div className={styles.offerCard}>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-truck-3d-icon-download-in-png-blend-fbx-gltf-file-formats--van-shipping-logistic-transport-pack-transportation-icons-5562353.png"
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
