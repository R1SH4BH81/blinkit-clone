import React, { useContext } from "react";
import { CartContext } from "../contextApi/cartContext";
import styles from "./styles/CartPage.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.qty, 0);
  };

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyCart}>
          <h2>Your Cart is Empty</h2>
          <p>Add some products to your cart to see them here.</p>
          <Link to="/" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Shopping Cart</h1>
        <p>{getTotalItems()} items in your cart</p>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.itemImage}
              />

              <div className={styles.itemDetails}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>
                  {item.description.slice(0, 100)}...
                </p>
                <p className={styles.itemRating}>
                  {item.rating?.rate} ⭐ ({item.rating?.count} reviews)
                </p>
              </div>

              <div className={styles.itemActions}>
                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{item.qty}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.itemPricing}>
                  <p className={styles.itemPrice}>${item.price}</p>
                  <p className={styles.itemTotal}>
                    Total: ₹{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryCard}>
            <h2>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal ({getTotalItems()} items):</span>
              <span>₹{getTotalPrice()}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax:</span>
              <span>₹0.00</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>₹{getTotalPrice()}</span>
            </div>

            <button className={styles.checkoutBtn}>Proceed to Checkout</button>

            <Link to="/" className={styles.continueBtn}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
