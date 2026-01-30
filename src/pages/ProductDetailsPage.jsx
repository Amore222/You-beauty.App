import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart(product, quantity, { size: selectedSize });
    alert(`${product.name} (${selectedSize}) added to your bag! ✨`);
  };

  return (
    <div className="min-h-screen gradient-secondary font-sans text-gray-800">
      <Navbar />
      <div className="container mx-auto px-6 py-32 md:py-40">

        {/* Back Button */}
        <div className="mb-8">
          <Link to="/shop" className="text-gray-600 hover:text-primary inline-flex items-center text-sm font-bold tracking-wide uppercase transition-all duration-300 transform hover:scale-105">
            ← Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-square w-full overflow-hidden bg-white rounded-2xl shadow-xl border-4 border-primary-light relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
                Premium
              </div>
            </div>
            {/* Optional Thumbnails placeholder */}
            <div className="flex gap-4 mt-6">
              <div className="w-20 h-20 bg-white rounded-lg overflow-hidden cursor-pointer border-2 border-primary-light hover:border-primary transition-all duration-300 hover:scale-110 shadow-md">
                <img src={product.image} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif animate-slide-up">{product.name}</h1>
            <p className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-slide-up" style={{ animationDelay: '0.1s' }}>R {product.price.toFixed(2)}</p>

            {/* Selectors */}
            <div className="max-w-xs mb-8">
              {/* Size */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Size:
                </label>
                <select
                  className="w-full bg-white border-2 border-primary-light text-gray-700 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300 shadow-sm"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="" disabled>Select Size</option>
                  <option value="50ml">50ml</option>
                  <option value="100ml">100ml</option>
                  <option value="200ml">200ml</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 bg-white border-2 border-primary-light text-gray-700 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-center transition-all duration-300 shadow-sm font-bold"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 gradient-primary text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 uppercase tracking-wider transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Add to Basket ✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Extra Details Text */}
            <div className="border-t-2 border-primary-light pt-8 mt-10">
              <div className="mb-6 bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg text-gradient mb-3">Description</h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  {product.description}
                </p>
              </div>

              <div className="text-xs text-gray-600 space-y-3">
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="font-bold text-gray-800">Key Ingredients:</span>
                  <span>Natural extracts, Essential oils, Vitamin E</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="font-bold text-gray-800">Skin Type:</span>
                  <span>Suitable for all skin types</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="font-bold text-gray-800">Usage:</span>
                  <span>Apply daily for best results</span>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <span className="font-bold text-gray-800">Origin:</span>
                  <span>Made in South Africa</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
