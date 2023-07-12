import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [windowWidth, setWindowWith] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize: () => void = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="py-4 flex  flex-col items-center text-center w-full">
      <h1 className="text-headerText-100 italic uppercase mr-5">
        Hello Tailwind
      </h1>
      <span
        className="font-sans text-headerText-200 stacked-fractions hover:oldstyle-nums 
      hover:scale-105 transition-all duration-1000"
      >
        0123
      </span>
      {windowWidth > 768 && (
        <a
          href="#footer"
          className="my-3 md:my-5 border-2 p-3 px-8 lg:px-12 rounded border-blue-700 outline-blue-700 hover:scale-105 focus:scale-105"
        >
          Check footer
        </a>
      )}
    </section>
  );
};

export default Header;
