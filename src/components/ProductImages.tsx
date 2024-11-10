"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/28714404/pexels-photo-28714404/free-photo-of-honey-drizzle-from-wooden-dipper-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29139391/pexels-photo-29139391/free-photo-of-dome-of-palacio-de-bellas-artes-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/17525263/pexels-photo-17525263/free-photo-of-peach-juice-in-glasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/29184391/pexels-photo-29184391/free-photo-of-artistic-dessert-presentation-with-spoon-and-chocolate-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProductImages = () => {

  const [index, setIndex] = useState(0)

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() =>setIndex(i)}>
            <Image
                src={img.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
            />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
