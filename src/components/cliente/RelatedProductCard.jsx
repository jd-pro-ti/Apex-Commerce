import Image from "next/image";
import Link from "next/link";

export function RelatedProductCard({ product }) {
  return (
    <Link
      href={`/cliente/producto?id=${product.id}`}
      className="group block shrink-0 w-[140px] sm:w-[160px]"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary mb-2.5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="160px"
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
        />
      </div>
      <p className="font-label text-[8px] tracking-[0.12em] uppercase text-neutral mb-1">
        {product.brand}
      </p>
      <p className="font-headline text-[12px] font-semibold text-primary mb-1 leading-[1.25] line-clamp-2">
        {product.name}
      </p>
      <p className="font-headline text-[11px] font-bold text-primary">
        ${product.price.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
      </p>
    </Link>
  );
}
