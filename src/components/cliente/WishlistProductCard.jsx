"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function WishlistProductCard({ product, onRemove }) {
  const priceDisplay = product.priceUponRequest
    ? "Precio bajo consulta"
    : `$${product.price.toLocaleString("es-ES")}`;

  return (
    <article className="group bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.1)] overflow-hidden hover-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-off-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        <button
          type="button"
          onClick={() => onRemove?.(product.id)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm text-red-500 hover:bg-white transition-colors"
          aria-label={`Quitar ${product.name} de la colección`}
        >
          <Heart className="h-3.5 w-3.5 fill-current" />
        </button>

        <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-sm bg-white/85 backdrop-blur-sm font-label text-[8px] tracking-[0.1em] uppercase text-primary">
          {product.categoryTag}
        </span>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="font-headline text-[15px] md:text-base font-semibold text-primary leading-[1.25] mb-1.5">
          {product.name}
        </h3>
        <p className="font-body text-[11px] text-neutral mb-3">{product.details}</p>

        <div className="flex items-end justify-between gap-3">
          <p className="font-headline text-[13px] md:text-sm font-bold text-primary">
            {priceDisplay}
          </p>
          <Link
            href={`/cliente/producto?id=${product.id}`}
            className="inline-flex items-center gap-1 font-label text-[8px] tracking-[0.12em] uppercase text-neutral hover:text-tertiary transition-colors whitespace-nowrap shrink-0"
          >
            {product.actionLabel}
            <ArrowRight className="h-2.5 w-2.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
