import React, { useContext } from "react";
import styles from "./styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../contextApi/cartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.cardLink}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.cardContent}>
        <div className={styles.rating}>
          <span className={styles.stars}>⭐ {product.rating?.rate}</span>
          <span className={styles.reviews}>({product.rating?.count})</span>
        </div>

        <div className={styles.priceSection}>
          <p className={styles.price}>rs{product.price}</p>
        </div>

        <div className={styles.actions}>
          {!inCart ? (
            <button
              className={styles.addButton}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className={styles.counter}>
              <button
                className={styles.counterBtn}
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className={styles.qty}>{inCart.qty}</span>
              <button
                className={styles.counterBtn}
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
