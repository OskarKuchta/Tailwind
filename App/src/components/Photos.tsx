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
    <div className="w-1/2 sm:w-1/3 md:w-1/5 overflow-hidden">
      <img
        className="w-full rounded-full aspect-square"
        src={photo}
        alt="Random image"
      />
    </div>
  );
};

export default Photos;
