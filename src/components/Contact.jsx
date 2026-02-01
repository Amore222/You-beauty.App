import React, { useState } from "react";
import img1 from "../assets/natural-beauty.jpg";
import img2 from "../assets/sea-salt.jpeg";

function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <section className="flex flex-wrap justify-between items-start gap-10 p-10 bg-white min-h-screen box-border max-md:flex-col max-md:p-5">
      
      {/* LEFT SECTION */}
      <div className="flex-1 min-w-[300px]">
        <p className="text-[30px] font-light text-[#1b1509] mb-2">
          Follow us on Instagram
        </p>

        <a
          href="https://www.instagram.com/you_beauty/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-[#1b1509] mb-5 inline-block hover:underline"
        >
          @you_beauty
        </a>

        <div className="flex gap-5 mt-5 max-md:flex-col">
          <img
            src={img1}
            alt="Instagram 1"
            className="w-[48%] h-[200px] object-cover rounded-lg max-md:w-full max-md:h-auto"
          />
          <img
            src={img2}
            alt="Instagram 2"
            className="w-[48%] h-[200px] object-cover rounded-lg max-md:w-full max-md:h-auto"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 min-w-[300px]">
        <h2 className="text-2xl text-[#272727] mb-4">
          Subscribe
        </h2>

        <p className="mb-5">
          Sign up with your email address to receive news and updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md text-base outline-none focus:border-[#1ff4bf]"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-[#d07849] text-white text-xs uppercase rounded-md border border-[#d07849] hover:bg-[#c06839] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}

export default Contact;
