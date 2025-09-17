import React, { useContext } from "react";
import styles from "./styles/ProductCard.module.css";
import { CartContext } from "../contextApi/cartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.desc}>{product.description.slice(0, 60)}...</p>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.rating}>{product.rating?.rate} ⭐</p>

      <div className={styles.actions}>
        {!inCart ? (
          <button className={styles.add} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        ) : (
          <div className={styles.counter}>
            <button
              className={styles.btn}
              onClick={() => removeFromCart(product.id)}
            >
              -
            </button>
            <span className={styles.qty}>{inCart.qty}</span>
            <button className={styles.btn} onClick={() => addToCart(product)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
