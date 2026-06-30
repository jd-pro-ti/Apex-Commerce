"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Share2 } from "lucide-react";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { CollectionFilters } from "@/components/cliente/CollectionFilters";
import { WishlistProductCard } from "@/components/cliente/WishlistProductCard";
import { Button } from "@/components/ui/Button";
import {
  collectionCategories,
  wishlistProducts as initialWishlist,
} from "@/data/wishlistProducts";

export default function WishlistPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [items, setItems] = useState(initialWishlist);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "Tu Colección Privada",
        text: "Curando lo extraordinario, guardado para tu consideración.",
        url: window.location.href,
      });
    }
  };

  return (
    <>
      <NavbarCliente />

      <main className="w-[90%] max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6 pt-28 md:pt-[7.5rem] pb-14">
        <nav className="font-label text-[9px] tracking-[0.16em] uppercase text-neutral mb-6">
          <Link href="/dashboard/cliente" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-primary">Tu Colección Privada</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8 md:mb-10">
          <div className="max-w-[520px]">
            <h1 className="font-headline text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-primary leading-[1.15] mb-2">
              Tu Colección Privada
            </h1>
            <p className="font-body text-[12px] md:text-[13px] leading-[1.6] text-neutral">
              Curando lo extraordinario, guardado para tu consideración.
            </p>
          </div>

          <Button
            variant="inverted"
            size="sm"
            onClick={handleShare}
            className="self-start rounded-lg gap-2 px-5 py-2.5 text-[9px] tracking-[0.14em]"
          >
            <Share2 className="h-3.5 w-3.5" />
            Compartir Colección
          </Button>
        </div>

        <div className="mb-8 md:mb-10">
          <CollectionFilters
            categories={collectionCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {filteredItems.map((product) => (
              <WishlistProductCard
                key={product.id}
                product={product}
                onRemove={handleRemove}
              />
            ))}

            <Link
              href="/cliente/catalogo"
              className="group flex flex-col items-center justify-center min-h-[320px] md:min-h-0 aspect-auto md:aspect-[4/5] rounded-xl border-2 border-dashed border-neutral/25 bg-off-white/60 hover:border-primary/30 hover:bg-off-white transition-colors p-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral/30 bg-white text-primary mb-4 group-hover:border-primary/40 transition-colors">
                <Plus className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-headline text-base font-semibold text-primary mb-2">
                Descubre Más Tesoros
              </h3>
              <p className="font-body text-[11px] leading-[1.55] text-neutral max-w-[220px]">
                Explora nuestras últimas novedades y amplía tu colección
              </p>
            </Link>
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-off-white rounded-xl">
            <p className="font-headline text-lg font-semibold text-primary mb-2">
              No hay tesoros en esta categoría
            </p>
            <p className="font-body text-[12px] text-neutral mb-6">
              Explora el catálogo y guarda artículos en tu colección privada.
            </p>
            <Button asChild variant="primary" size="sm" className="rounded-lg">
              <Link href="/cliente/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
