import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const badgeStyles = {
  tertiary: "bg-tertiary/20 text-primary",
  neutral: "bg-white/92 text-primary shadow-sm",
};

export function ProductCard({ product }) {
  const badgeClass = badgeStyles[product.badgeVariant ?? "neutral"];

  return (
    <article className="group">
      <Link href={`/cliente/producto?id=${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-off-white mb-2.5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {product.badge && (
            <span
              className={`absolute top-2 left-2 px-1.5 py-px rounded-full font-label text-[7px] tracking-[0.05em] uppercase ${badgeClass}`}
            >
              {product.badge}
            </span>
          )}
        </div>

        <p className="font-label text-[8px] tracking-[0.14em] uppercase text-neutral mb-1">
          {product.brand}
        </p>
        <h3 className="font-headline text-[13px] font-semibold text-primary mb-1.5 leading-[1.25] line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline justify-between gap-1.5">
          <p className="font-headline text-[12px] font-bold text-primary">
            ${product.price.toLocaleString("es-ES")}
          </p>
          <span className="inline-flex items-center gap-0.5 font-label text-[8px] tracking-[0.03em] uppercase text-neutral group-hover:text-tertiary transition-colors whitespace-nowrap">
            Ver Detalles
            <ArrowRight className="h-2 w-2" strokeWidth={2} />
          </span>
        </div>
      </Link>
    </article>
  );
}
