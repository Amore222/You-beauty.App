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
                        Melula is a Children Fashion brand from Copenhagen, Denmark.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The danish design duo Louise Møllermark and Søren Hougesen joined forces in 2015 focusing on simple and beautiful design aesthetics. Melula is a direct product of this collaboration.
                    </p>
                </div>

                {/* Mission */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Mission</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We love kids, kids are fun just as they are - active, creative and playfull.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Melula was founded because we couldn’t find children’s shoes with both childlike and playful look in combination with a feel of the simplicity of Scandinavian design.
                    </p>
                </div>

                {/* Melula Shoes */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Melula Shoes</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Shapes and Colors are one of the fundamentals in Melula.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        We derive our inspiration from the creative processes of children and how they express themselves while playing. Melula have created a classic stylish shoe that are playful, fun and has a unique colourfull approach to design. Melula shoes are aiming for a unisex approach, unless our patterns guides in a clear direction.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The shoes is a transition shoe that both can be used for when your little ones needs to look stylish, but also just for everyday use. We are continualy developing new prints and styles, so that Melula can continue to be a brand that dictates trends instead of following them.
                    </p>
                </div>

                {/* Materials */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Materials</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Quality and comfort are extremely important while creating a shoe for children. That’s why we chose a soft material, which is suitable for the foot. The material and the inner construction stabilizes the ankle but also make it exible enough to bend, which is important for movability as well as Our shoes are made out of strong and durable fabrics. They are easy to clean and breathable for the foot
                    </p>
                </div>

                {/* Transparent and Fair production */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Transparent and Fair production</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        We chose to focus heavily on the design and the production as the most important ingredients in the development of the collection. The production of our shoes is an important factor. We cooperate only with manufacturers that have full transparency and works within sound ethical guidelines, fair working conditions and the compliance with environmental standards.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our main shoe manufacture comes from a historical line of shoemakers with there main focus on the creation and development of children’s footwear. A mid- high range productline that is distinguished by its exclusivity and quality of materials. Based in mainland of Portugal
                    </p>
                </div>

                {/* Suppliers */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gradient font-serif mb-6 animate-slide-up">Suppliers</h2>
                    <p className="text-lg leading-relaxed">
                        All Melulas suppliers are based in the southern part of Euope mainly Italy, Spain and Portugal, where there is a long historie of producing materials of the highest quality, ensuring longlivity and a high standard. All of our textiles comes from Portugal, all leather materials are supllied by our Italien and spanish based suppliers.
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
