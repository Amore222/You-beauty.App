import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

function ShippingPage() {
    return (
        <div className="relative min-h-screen gradient-secondary">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d07849] mb-8">Shipping & Returns</h1>

                <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm">

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-4 mb-4">Worldwide Shipping</h2>
                    <p>
                        We ship worldwide from our warehouse in Portugal. All orders are processed within 1-2 business days.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Europe:</strong> 2-5 business days</li>
                        <li><strong>International:</strong> 5-10 business days</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">Returns Policy</h2>
                    <p>
                        We want you to love your You Beauty products. If you are not completely satisfied, you may return unopened items within 30 days of delivery.
                    </p>
                    <p>
                        Please contact <a href="mailto:hello@melula.com" className="text-[#d07849] hover:underline">hello@melula.com</a> to initiate a return.
                    </p>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">Damaged Items</h2>
                    <p>
                        If your order arrives damaged, please email us immediately with photos, and we will send a replacement free of charge.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShippingPage;
