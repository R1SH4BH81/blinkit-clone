import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./section/Hero.jsx";
import ProductList from "./components/ProductList.jsx";
import { HomeIcon, CartIcon } from "./utils/IconHelper.jsx";
import ProductDetail from "./pages/productPage";
import CartPage from "./pages/CartPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav className="nav">
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </nav>

        <div className="page-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
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
