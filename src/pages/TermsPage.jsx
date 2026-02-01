import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

function TermsPage() {
    return (
        <div className="relative min-h-screen gradient-secondary">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-serif text-[#d07849] mb-8">Terms and Conditions</h1>

                <div className="space-y-6 text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm">
                    <p>
                        Welcome to You Beauty. By using our website, you agree to these terms.
                    </p>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">1. General</h2>
                    <p>
                        You Beauty is a Danish-based beauty brand. All content on this site is property of You Beauty.
                    </p>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">2. Products</h2>
                    <p>
                        We strive to display our products as accurately as possible. However, colors may vary slightly depending on your screen.
                    </p>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">3. Purchases</h2>
                    <p>
                        All purchases are subject to availability. We reserve the right to refuse service to anyone.
                    </p>

                    <h2 className="text-2xl font-serif text-[#e3a362] mt-8 mb-4">4. Privacy</h2>
                    <p>
                        Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TermsPage;
