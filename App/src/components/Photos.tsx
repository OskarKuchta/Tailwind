import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Photos: React.FC = () => {
  const [photo, setPhoto] = useState(img1);
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter === 4 ? 0 : counter + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  useEffect(() => {
    const photos: string[] = [img1, img2, img3, img4, img5];
    setPhoto(photos[counter]);
  }, [counter]);

  return (
    <section className="w-1/3 sm:w-1/4 md:w-1/5">
      <figure>
        <img
          className="w-full rounded-full aspect-square transition-all duration-1000 hover:scale-110 hover:rotate-180"
          src={photo}
          alt="Random image"
        />
        <figcaption className="mt-4 text-[#65c439] text-xs sm:text-base sm:text-[#3d0ebc] underline decoration-white decoration-dotted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          assumenda nobis, repellendus
        </figcaption>
      </figure>
    </section>
  );
};

export default Photos;
