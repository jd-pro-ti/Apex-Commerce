"use client";

import Link from "next/link";
import {
  CreditCard,
  ShieldCheck,
  Truck,
  BadgeCheck,
  ShoppingCart,
  Trash2,
  ArrowRight,
} from "lucide-react";

export default function CartSummary({
  subtotal,
  descuento,
  envio,
  iva,
  total,
  totalProductos,
  vaciarCarrito,
}) {
  return (
    <aside className="sticky top-28 h-fit">

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

        {/* Encabezado */}

        <div className="bg-[#0f172a] text-white p-6">

          <div className="flex items-center gap-3">

            <ShoppingCart size={28} />

            <div>

              <h2 className="text-2xl font-semibold">
                Resumen
              </h2>

              <p className="text-gray-300 text-sm">
                {totalProductos} productos seleccionados
              </p>

            </div>

          </div>

        </div>

        {/* Información */}

        <div className="p-6 space-y-5">

          <div className="flex justify-between">

            <span className="text-gray-600">
              Subtotal
            </span>

            <strong>
              ${subtotal.toLocaleString()}
            </strong>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-600">
              Descuento
            </span>

            <span className="text-green-600 font-semibold">

              {descuento > 0
                ? `-$${descuento.toLocaleString()}`
                : "$0"}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-600">
              Envío
            </span>

            <span>

              {envio === 0 ? (
                <span className="text-green-600 font-semibold">
                  GRATIS
                </span>
              ) : (
                `$${envio.toLocaleString()}`
              )}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-600">
              IVA
            </span>

            <strong>
              ${iva.toLocaleString()}
            </strong>

          </div>

          <hr />

          <div className="flex justify-between items-center">

            <span className="text-xl font-semibold">
              Total
            </span>

            <span className="text-3xl font-bold text-[#c9a84c]">

              ${total.toLocaleString()}

            </span>

          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">

            <p className="text-green-700 text-sm">

              🎉 Tu compra aplica para envío gratuito.

            </p>

          </div>

          {/* Beneficios */}

          <div className="space-y-3">

            <div className="flex gap-3">

              <ShieldCheck
                className="text-green-600"
                size={20}
              />

              <span className="text-sm">

                Pago 100% seguro

              </span>

            </div>

            <div className="flex gap-3">

              <Truck
                className="text-blue-600"
                size={20}
              />

              <span className="text-sm">

                Envíos a todo México

              </span>

            </div>

            <div className="flex gap-3">

              <BadgeCheck
                className="text-yellow-600"
                size={20}
              />

              <span className="text-sm">

                Garantía oficial

              </span>

            </div>

            <div className="flex gap-3">

              <CreditCard
                className="text-purple-600"
                size={20}
              />

              <span className="text-sm">

                Hasta 12 meses sin intereses

              </span>

            </div>

          </div>

          {/* Botón */}

          <Link
            href="/dashboard/cliente/checkout"
            className="mt-6 flex justify-center items-center gap-2 w-full bg-[#c9a84c] hover:bg-[#b8943d] text-white py-4 rounded-xl transition font-semibold"
          >

            Proceder al Checkout

            <ArrowRight size={18} />

          </Link>

          {/* Vaciar */}

          <button
            onClick={vaciarCarrito}
            className="mt-4 flex justify-center items-center gap-2 w-full border border-red-300 text-red-600 hover:bg-red-50 py-3 rounded-xl transition"
          >

            <Trash2 size={18} />

            Vaciar carrito

          </button>

        </div>

      </div>

    </aside>
  );
}