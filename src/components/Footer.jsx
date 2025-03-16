import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 w-full relative">
      {/* <div className="absolute left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/feshr.png')" }}></div>  */}

<div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
    <img src="public/feshar.png" alt="Popcorn Image" className="w-40 h-auto" />
  </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3  text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Movies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Shows</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Useful</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Support</li>
              <li>FAQ</li>
              <li>Live chat</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">Download Our App</h3>
            <div className="flex justify-center md:justify-end space-x-3">
            <FaApple className="w-20 h-14" />
            <FaGooglePlay className="w-12 h-14" />
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;