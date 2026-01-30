import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const handleCheckout = () => {
        alert("Thank you for your order! Your luxury beauty essentials are on their way. ✨");
        clearCart();
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen gradient-secondary font-sans text-gray-800">
            <Navbar />
            <div className="container mx-auto px-6 py-32 md:py-40">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold text-gradient font-serif">
                        Your Shopping Bag
                    </h1>
                    {cartItems.length > 0 && (
                        <Link
                            to="/shop"
                            className="bg-white/50 backdrop-blur-md px-6 py-2 rounded-full text-primary font-bold hover:bg-primary-light hover:text-white transition-all duration-300 shadow-sm"
                        >
                            ← Continue Shopping
                        </Link>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 animate-slide-up">
                        <ShoppingBag size={80} className="mx-auto text-primary-light/50 mb-6" />
                        <p className="text-2xl text-gray-600 mb-8 font-medium">Your bag is currently empty.</p>
                        <Link
                            to="/shop"
                            className="inline-block px-12 py-4 gradient-primary text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-110 uppercase tracking-widest"
                        >
                            Browse Beauty ✨
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6 animate-slide-up">
                            {cartItems.map((item) => (
                                <div
                                    key={item.cartItemId}
                                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/40 hover:border-primary-light transition-all duration-500 group"
                                >
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                                    </div>
                                    <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                                        {item.options?.size && (
                                            <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-tighter">
                                                Size: {item.options.size}
                                            </span>
                                        )}
                                        <p className="text-primary font-black text-xl mb-6 flex items-center justify-center md:justify-start gap-1">
                                            R {item.price.toFixed(2)}
                                        </p>
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                                            <div className="flex items-center bg-white rounded-2xl shadow-sm border border-primary-light overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.cartItemId, -1)}
                                                    className="p-3 hover:bg-primary/5 text-primary transition-colors"
                                                >
                                                    <Minus size={20} />
                                                </button>
                                                <span className="px-6 font-black text-xl text-gray-700 min-w-[3rem] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.cartItemId, 1)}
                                                    className="p-3 hover:bg-primary/5 text-primary transition-colors"
                                                >
                                                    <Plus size={20} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.cartItemId)}
                                                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all font-bold px-4 py-2 hover:bg-red-50 rounded-xl"
                                                title="Remove item"
                                            >
                                                <Trash2 size={22} />
                                                <span className="text-sm">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right whitespace-nowrap">
                                        <p className="text-2xl font-black text-gray-800">
                                            R {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white/90 backdrop-blur-md rounded-[3rem] shadow-2xl p-10 sticky top-32 border border-white">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif border-b border-primary-light pb-6 text-center">
                                    Summary
                                </h2>
                                <div className="space-y-6 mb-10">
                                    <div className="flex justify-between text-lg text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-gray-800">R {subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-500 font-black uppercase text-sm bg-green-50 px-3 py-1 rounded-full">Free</span>
                                    </div>
                                    <div className="border-t-2 border-dashed border-primary-light pt-6 flex justify-between items-center">
                                        <span className="text-xl font-bold text-gray-800">Total</span>
                                        <span className="text-3xl font-black text-gradient">R {subtotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-5 gradient-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 uppercase tracking-widest relative overflow-hidden group mb-6"
                                >
                                    <span className="relative z-10">Checkout ✨</span>
                                </button>
                                <div className="flex items-center justify-center gap-2 text-gray-400">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-[10px] uppercase font-bold tracking-widest">End-to-End Encryption Enabled</p>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center gap-4 text-gray-400">
                                <p className="text-xs uppercase font-bold tracking-widest">Secure Payment Guaranteed</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;
