import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductList() {
    const { addToCart } = useCart();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Smooth scroll to top of products section
        document.getElementById('shop-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    return (
        <section className="py-20 gradient-secondary relative overflow-hidden" id="shop-products">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-4 text-gradient animate-fade-in font-serif">
                    Our Luxe Collection
                </h2>
                <p className="text-center text-gray-600 mb-12 animate-slide-up text-lg">
                    Discover premium beauty products crafted with love
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children mb-12">
                    {currentProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary-light flex flex-col transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Link to={`/product/${product.id}`} className="block h-80 overflow-hidden relative cursor-pointer">
                                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse-slow">
                                    New
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            </Link>
                            <div className="p-6 text-center flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-secondary/30">
                                <div>
                                    <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                                        <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-serif group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold text-2xl mb-4">
                                        R {product.price.toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart(product);
                                        alert(`${product.name} added to your bag! ✨`);
                                    }}
                                    className="w-full py-3 gradient-primary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 uppercase text-sm tracking-wider transform hover:scale-105 relative overflow-hidden group/btn"
                                >
                                    <span className="relative z-10">Add to Cart</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-4 mt-12 animate-fade-in">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${currentPage === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'gradient-primary text-white hover:shadow-lg transform hover:scale-105'
                            }`}
                    >
                        ← Previous
                    </button>

                    <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 ${currentPage === index + 1
                                    ? 'gradient-primary text-white shadow-lg scale-110'
                                    : 'bg-white text-gray-700 border-2 border-primary-light hover:border-primary'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'gradient-primary text-white hover:shadow-lg transform hover:scale-105'
                            }`}
                    >
                        Next →
                    </button>
                </div>

                {/* Page Info */}
                <p className="text-center mt-6 text-gray-600 font-medium">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
                </p>
            </div>
        </section>
    );
}

export default ProductList;
