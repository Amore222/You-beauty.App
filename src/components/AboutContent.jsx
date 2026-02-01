import React from 'react';
import img1 from '../assets/product1.jpg';
import img2 from '../assets/natural.jpg';
import img3 from '../assets/scrub.jpg';
import img4 from '../assets/oil.jpeg';

function AboutContent() {
    return (
        <section className="py-20 bg-transparent font-sans text-gray-800">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">

                {/* Founders */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Founders</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        You Beauty is a Natural Beauty brand inspired by Scandinavian simplicity.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The design duo joined forces in 2024 focusing on simple and beautiful aesthetics suitable for your daily ritual. You Beauty is a direct product of this collaboration.
                    </p>
                </div>

                {/* Mission */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Mission</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We love natural beauty. Your skin is perfect just as it is - distinctive, radiant, and alive.
                    </p>
                    <p className="text-lg leading-relaxed">
                        You Beauty was founded because we couldn’t find skincare that combined effective natural ingredients with the simplicity of Scandinavian design.
                    </p>
                </div>

                {/* Our Collection */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Our Collection</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Texture and Scent are fundamentals in our collection.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        We derive our inspiration from nature's palette. We have created a classic line of essentials that are effective, gentle, and have a unique sensory appeal. Our products aim for a universal approach, suitable for all skin types.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our collection is designed to transition seamlessly from your morning routine to your evening unwind. We are continually developing new formulas so that You Beauty can continue to be a brand that defines self-care.
                    </p>
                </div>

                {/* Ingredients */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Ingredients</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Quality and purity are extremely important while creating skincare. That’s why we chose organic ingredients that are kind to the skin. Our formulations stabilize moisture levels while allowing the skin to breathe. Our products are made from potent, natural extracts—easy to use and effective.
                    </p>
                </div>

                {/* Transparent and Fair production */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Transparent and Fair production</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We chose to focus heavily on the formulation and the production as the most important ingredients in our development. We cooperate only with labs that have full transparency and work within sound ethical guidelines, fair working conditions, and compliance with environmental standards.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our main production comes from a historical line of skincare experts with their main focus on the creation and development of organic beauty. A mid-to-high range product line that is distinguished by its exclusivity and quality of ingredients.
                    </p>
                </div>

                {/* Suppliers */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Suppliers</h2>
                    <p className="text-lg leading-relaxed">
                        All our suppliers are based in the southern part of Europe, mainly Italy, Spain, and Portugal, where there is a long history of producing nature's finest oils and extracts. We ensure longevity and a high standard for every bottle.
                    </p>
                </div>



                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    <div className="aspect-square overflow-hidden rounded-2xl shadow-lg border-2 border-primary-light hover:border-primary transition-all duration-300">
                        <img src={img1} alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-2xl shadow-lg border-2 border-primary-light hover:border-primary transition-all duration-300">
                        <img src={img2} alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-2xl shadow-lg border-2 border-primary-light hover:border-primary transition-all duration-300">
                        <img src={img3} alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-2xl shadow-lg border-2 border-primary-light hover:border-primary transition-all duration-300">
                        <img src={img4} alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>

            </div>
        </section >
    );
}

export default AboutContent;
