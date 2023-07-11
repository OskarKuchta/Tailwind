import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bg-black text-white object-contain w-screen">
      <p className="px-6 py-2 text-center text-sm sm:text-base md:text-lg footer-text">
        2023 Your Website &copy; <span className="mr-2"></span>
        All rights reserved. | Made with Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
