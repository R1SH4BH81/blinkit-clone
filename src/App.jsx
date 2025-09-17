import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./section/HeroSection";
import ProductList from "./components/ProductList";

import ProductDetail from "./pages/productPage";
import CartPage from "./pages/CartPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <HeroSection />
              <main className="main">
                <ProductList />
              </main>
            </div>
          }
        />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
