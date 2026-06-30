import { BadgeCheck } from "lucide-react";

export function ProductDetailInfo({ product }) {
  const hasDiscount = product.originalPrice > product.price;

  return (
    <div className="flex flex-col pt-1 lg:pt-2">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-label text-[8px] tracking-[0.14em] uppercase text-tertiary">
          {product.brand}
        </span>
        <span className="h-3 w-px bg-neutral/25" aria-hidden />
        <span className="font-label text-[8px] tracking-[0.14em] uppercase text-neutral">
          {product.category}
        </span>
      </div>

      <p className="font-headline text-[1.375rem] md:text-[1.5rem] font-bold text-primary leading-[1.2] mb-3">
        {product.name}
      </p>

      <p className="font-body text-[11px] leading-[1.65] text-neutral max-w-[400px] mb-5">
        {product.description}
      </p>

      <div className="flex items-baseline gap-2.5 mb-5">
        <span className="font-headline text-lg md:text-xl font-bold text-primary">
          ${product.price.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
        </span>
        {hasDiscount && (
          <span className="font-body text-[11px] text-neutral/70 line-through">
            ${product.originalPrice.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
        <button
          type="button"
          className="h-9 px-5 rounded-lg bg-primary text-white font-label text-[9px] tracking-[0.12em] uppercase hover:bg-secondary transition-colors"
        >
          Añadir al Carrito
        </button>
        <button
          type="button"
          className="h-9 px-5 rounded-lg border border-primary text-primary font-label text-[9px] tracking-[0.12em] uppercase hover:bg-primary hover:text-white transition-colors"
        >
          Agendar Visita Privada
        </button>
      </div>

      <div className="rounded-lg border border-neutral/15 bg-off-white/60 p-4 max-w-[400px]">
        <div className="flex items-start gap-2.5">
          <BadgeCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="font-label text-[9px] tracking-[0.1em] uppercase text-primary mb-1">
              Autenticidad Garantizada
            </p>
            <p className="font-body text-[10px] leading-[1.55] text-neutral">
              Cada artículo es verificado por nuestros expertos. Incluye certificado de
              autenticidad y garantía de 24 meses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
