"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RelatedProductCard } from "@/components/cliente/RelatedProductCard";

export function RelatedProducts({ products }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -180 : 180,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="mt-10 md:mt-12 pt-8 border-t border-neutral/15">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <span className="font-headline text-[1.125rem] font-bold text-primary block mb-1">
            Adquisiciones Relacionadas
          </span>
          <p className="font-body text-[11px] text-neutral">
            Selección curada para el coleccionista exigente
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral/20 text-neutral hover:border-primary hover:text-primary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral/20 text-neutral hover:border-primary hover:text-primary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
