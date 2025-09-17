import { createContext, useState, useEffect } from "react";
export const ProductsContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      } catch (error) {
        console.error(`product cant ne fetched ${error}`);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered(products);
    } else {
      const q = query.toLowerCase();
      setFiltered(products.filter((p) => p.title.toLowerCase().includes(q)));
    }
  }, [query, products]);
};

return (
  <ProductsContext.Provider value={{ products, filtered, loading, setQuery }}>
    {children}
  </ProductsContext.Provider>
);

export default ProductProvider;
