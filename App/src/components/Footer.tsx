import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer"
    className="fixed md:sticky bg-black text-white w-screen">
      <p className="px-6 py-2 text-center text-sm sm:text-base md:text-lg footer-text">
        2023 Your Website &copy; <span className="mr-2"></span>
        All rights reserved. | Made with Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
