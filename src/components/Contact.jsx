import React, { useState } from "react";
import img1 from "../assets/mosture-cream.jpeg";
import img2 from "../assets/organic-oil.jpeg";

function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      alert(`Thank you for subscribing, ${email}! ✨`);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-24 px-10 gradient-secondary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-20">

        {/* LEFT SECTION - Instagram focus */}
        <div className="flex-1 min-w-[320px] animate-fade-in">
          <h2 className="text-4xl font-black text-gradient mb-4 font-serif">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Follow our journey on Instagram for daily inspiration and beauty tips.
          </p>

          <a
            href="https://www.instagram.com/melula_copenhagen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-2xl font-black text-primary hover:text-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            <span className="p-3 bg-white rounded-2xl shadow-lg group-hover:shadow-primary/20 transition-all">
              📸
            </span>
            @melula_copenhagen
          </a>

          <div className="flex gap-6 mt-10">
            <div className="relative group w-1/2 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={img1}
                alt="Daily Glow"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="relative group w-1/2 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={img2}
                alt="Pure Ingredients"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Newsletter focus */}
        <div className="flex-1 min-w-[320px] bg-white/40 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border border-white/60 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-black text-gray-800 mb-6 font-serif">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Be the first to know about new arrivals, limited collections, and exclusive member-only offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-8 py-5 bg-white rounded-2xl text-lg font-medium border-2 border-transparent focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 shadow-inner"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-light pointer-events-none">✨</span>
            </div>

            <button
              type="submit"
              className="w-full py-5 gradient-primary text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-widest relative overflow-hidden group"
            >
              <span className="relative z-10">Sign Me Up 💌</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <div className="h-0.5 w-8 bg-gray-200"></div>
            <span>No Spam. Just Magic.</span>
            <div className="h-0.5 w-8 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
