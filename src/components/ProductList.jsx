import React, { useContext } from "react";
import { ProductsContext } from "../contextApi/productContext";
import ProductCard from "./PCard";
import styles from "./styles/ProductList.module.css";
import { Loader } from "./Loader";
const ProductList = () => {
  const { filtered, loading } = useContext(ProductsContext);

  if (loading)
    return (
      <p className={styles.loading}>
        <Loader />
      </p>
    );
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
