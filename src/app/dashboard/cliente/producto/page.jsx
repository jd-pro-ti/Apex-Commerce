"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { ProductGallery } from "@/components/cliente/ProductGallery";
import { ProductDetailInfo } from "@/components/cliente/ProductDetailInfo";
import { ProductIntelligence } from "@/components/cliente/ProductIntelligence";
import { RelatedProducts } from "@/components/cliente/RelatedProducts";
import { getProductById, getRelatedProducts } from "@/data/catalogProducts";

function ProductoContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") ?? "1";
  const product = getProductById(productId);
  const related = getRelatedProducts(productId);

  return (
    <>
      <nav className="font-label text-[9px] tracking-[0.16em] uppercase text-neutral mb-5">
        <Link href="/dashboard/cliente" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <span className="mx-1">&gt;</span>
        <Link href="/cliente/catalogo" className="hover:text-primary transition-colors">
          Explorar Todo
        </Link>
        <span className="mx-1">&gt;</span>
        <span className="text-primary">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ProductGallery
          images={product.images}
          productName={product.name}
          liveView={product.liveView}
        />
        <ProductDetailInfo product={product} />
      </div>

      <ProductIntelligence specs={product.specs} />
      <RelatedProducts products={related} />
    </>
  );
}

export default function ProductoPage() {
  return (
    <>
      <NavbarCliente />

      <main className="w-[90%] max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6 pt-28 md:pt-[7.5rem] pb-14">
        <Suspense fallback={<div className="font-body text-[11px] text-neutral">Cargando...</div>}>
          <ProductoContent />
        </Suspense>
      </main>
    </>
  );
}
