"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ images, productName, liveView }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full lg:max-w-[520px]">
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl bg-off-white mb-3">
        <Image
          src={images[selectedIndex]}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-cover"
        />
        {liveView && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/95 font-label text-[8px] tracking-[0.06em] uppercase text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            Vista en Vivo Disponible
          </span>
        )}
      </div>

      <div className="flex gap-2.5">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-off-white border-2 transition-colors ${
              selectedIndex === index ? "border-primary" : "border-transparent"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="72px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
