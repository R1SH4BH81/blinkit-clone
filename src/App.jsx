import React from "react";
import "./App.css";
import HeroSection from "./section/HeroSection";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <ProductList />
    </div>
  );
};

export default App;
