import React from "react";

const Header: React.FC = () => {
  return (
    <section className="py-4 flex items-center">
      <h1 className="text-headerText-100 italic uppercase mr-5">
        Hello Tailwind
      </h1>
      <span className="font-sans text-headerText-200 stacked-fractions hover:oldstyle-nums hover:scale-105 transition-all duration-1000">
        0123
      </span>
    </section>
  );
};

export default Header;
