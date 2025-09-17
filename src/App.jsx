import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./section/HeroSection.jsx";
import ProductList from "./components/ProductList.jsx";

import ProductDetail from "./pages/productPage";
import CartPage from "./pages/CartPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <div className="page-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <main className="main">
                    <ProductList />
                  </main>
                </>
              }
            />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
