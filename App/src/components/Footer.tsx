import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="sticky bg-black w-screen text-white object-contain">
      <p className="px-6 py-2 text-center text-sm sm:text-base md:text-lg">
        2023 Your Website &copy; <span className="mr-2"></span>
        All rights reserved. | Made with Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
