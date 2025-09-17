import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contextApi/cartContext";
import styles from "./styles/productDetails.module.css";
import { Loader } from "../components/Loader";
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <p className={styles.loading}>
        <Loader />
      </p>
    );
  if (!product) return <p className={styles.error}>Product not found</p>;

  return (
    <div className={styles.detail}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.desc}>{product.description}</p>
        <p className={styles.price}>₹{product.price}</p>
        <p className={styles.rating}>
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
        <button onClick={() => addToCart(product)} className={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
