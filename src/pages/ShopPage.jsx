import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/shared/Footer";


function ShopPage() {
  return (
    <div className="relative min-h-screen gradient-secondary">
      <Navbar />
      <Hero
        title="The Beauty Shop"
        subtitle="Explore our curated collection of organic scrubs, oils, and essentials for your daily ritual."
        scrollToId="#shop-products"
      />
      <ProductList />
      <Footer />
    </div>
  );
}

export default ShopPage;
