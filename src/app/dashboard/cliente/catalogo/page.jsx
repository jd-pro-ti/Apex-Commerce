"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { CatalogFilters } from "@/components/cliente/CatalogFilters";
import { ProductCard } from "@/components/cliente/ProductCard";
import { catalogProducts } from "@/data/catalogProducts";

const sortOptions = [
  "Más Recientes",
  "Precio: Menor a Mayor",
  "Precio: Mayor a Menor",
  "Más Populares",
];

export default function CatalogoPage() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [products] = useState(catalogProducts);

  const totalPages = 3;

  return (
    <>
      <NavbarCliente />

      <main className="w-[90%] max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6 pt-28 md:pt-[7.5rem] pb-14">
        <nav className="font-label text-[9px] tracking-[0.16em] uppercase text-neutral mb-5">
          <Link href="/dashboard/cliente" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-primary">Explorar Todo</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div
            className={`${showMobileFilters ? "block" : "hidden"} lg:block lg:sticky lg:top-28 lg:self-start shrink-0`}
          >
            <CatalogFilters />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="max-w-[340px] pt-0.5">
                <h1 className="font-headline text-[1.375rem] md:text-[1.5rem] font-bold text-primary leading-[1.2] mb-1.5">
                  Esenciales Curados
                </h1>
                <p className="font-body text-[11px] leading-[1.55] text-neutral">
                  Explora nuestra selección cuidadosamente elegida de productos premium,
                  verificados en calidad y autenticidad.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden inline-flex items-center gap-1.5 h-7 px-2.5 border border-neutral/20 rounded-md font-label text-[9px] tracking-[0.1em] uppercase text-primary"
                >
                  <SlidersHorizontal className="h-3 w-3" />
                  Filtros
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-7 min-w-[120px] px-2 border border-neutral/20 rounded-md font-label text-[9px] tracking-[0.1em] uppercase text-primary bg-white focus:outline-none focus:border-primary cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="font-label text-[9px] tracking-[0.14em] uppercase text-neutral mb-4">
              Mostrando {products.length} Resultados
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-9">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <nav
              className="flex items-center justify-center gap-1 mt-12"
              aria-label="Paginación"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral/20 text-neutral hover:border-primary hover:text-primary transition-colors disabled:opacity-35"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-7 w-7 items-center justify-center rounded-full font-label text-[10px] transition-colors ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "border border-neutral/20 text-neutral hover:border-primary hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral/20 text-neutral hover:border-primary hover:text-primary transition-colors disabled:opacity-35"
                aria-label="Página siguiente"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
