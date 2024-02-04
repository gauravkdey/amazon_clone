import { useState } from "react";
import homepageHeroImages from "./homepage_hero_images";

function HomepageHero() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={() => {
          setCurrentImage((currentImage + 1) % homepageHeroImages.length);
        }}
        className="absolute z-10 top-16 left-0 text-7xl scale-x-75 text-white font-extralight"
      >
        &lt;
      </button>
      <div className="relative flex">
        <img
          className="w-full h-auto"
          src={homepageHeroImages[currentImage]}
          alt={`homepage hero image ${currentImage + 1}`}
        />
        <div className="absolute w-full h-full grow bg-gradient-to-b from-transparent via-transparent to-slate-200" />{" "}
      </div>
      <button
        onClick={() => {
          setCurrentImage(
            (currentImage + homepageHeroImages.length - 1) %
              homepageHeroImages.length
          );
        }}
        className="absolute z-10 top-16 right-0 text-7xl scale-x-75 text-white font-extralight"
      >
        &gt;
      </button>
    </div>
  );
}

export default HomepageHero;
