"use client";

import Link from "next/link";
import {
  ShoppingCart,
  ArrowLeft,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function EmptyCart() {
  return (
    <section className="flex justify-center items-center py-20">

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

        {/* Icono */}

        <div className="flex justify-center">

          <div className="w-28 h-28 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">

            <ShoppingCart
              size={60}
              className="text-[#c9a84c]"
            />

          </div>

        </div>

        {/* Texto */}

        <div className="text-center mt-8">

          <h1 className="text-4xl font-light">
            Tu carrito está vacío
          </h1>

          <p className="mt-5 text-gray-500 leading-7">

            Aún no has agregado productos.
            Explora nuestro catálogo y encuentra artículos
            increíbles para comenzar tu compra.

          </p>

        </div>

        {/* Beneficios */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-gray-50 rounded-2xl p-6 text-center">

            <Package
              className="mx-auto text-[#c9a84c]"
              size={34}
            />

            <h3 className="mt-4 font-semibold">
              Miles de productos
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Encuentra tecnología, accesorios y mucho más.
            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center">

            <Truck
              className="mx-auto text-green-600"
              size={34}
            />

            <h3 className="mt-4 font-semibold">
              Envío rápido
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Entregas a todo México con seguimiento.
            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center">

            <ShieldCheck
              className="mx-auto text-blue-600"
              size={34}
            />

            <h3 className="mt-4 font-semibold">
              Compra protegida
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Todos tus pagos están protegidos.
            </p>

          </div>

        </div>

        {/* Botón */}

        <div className="flex justify-center mt-12">

          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8943d] text-white px-8 py-4 rounded-xl transition font-semibold"
          >

            <ArrowLeft size={20} />

            Continuar comprando

          </Link>

        </div>

      </div>

    </section>
  );
}