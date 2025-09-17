import React, { useContext } from "react";
import { ProductsContext } from "../contextApi/productContext";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const { filtered, loading } = useContext(ProductsContext);

  if (loading) return <p className={styles.loading}>Loading products...</p>;
  if (!filtered.length)
    return <p className={styles.empty}>No products found.</p>;

  return (
    <div className={styles.grid}>
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
