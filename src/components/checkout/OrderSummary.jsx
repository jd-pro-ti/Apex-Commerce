"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Tag,
  CheckCircle2,
} from "lucide-react";

const productos = [
  {
    id: 1,
    nombre: "MacBook Pro M4",
    cantidad: 1,
    precio: 42999,
  },
  {
    id: 2,
    nombre: "AirPods Pro 2",
    cantidad: 2,
    precio: 5999,
  },
];

export default function OrderSummary() {

  const subtotal = productos.reduce(
    (acc, producto) =>
      acc + producto.precio * producto.cantidad,
    0
  );

  const descuento = 2500;

  const envio = 0;

  const iva = Math.round((subtotal - descuento) * 0.16);

  const total = subtotal - descuento + envio + iva;

  return (

    <aside className="sticky top-28 h-fit">

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Encabezado */}

        <div className="bg-[#0f172a] text-white p-6">

          <h2 className="text-2xl font-semibold">
            Resumen del Pedido
          </h2>

          <p className="text-gray-300 text-sm mt-2">
            Revisa tu compra antes de confirmar.
          </p>

        </div>

        {/* Productos */}

        <div className="p-6">

          <h3 className="font-semibold mb-5">

            Productos

          </h3>

          <div className="space-y-5">

            {productos.map((producto) => (

              <div
                key={producto.id}
                className="flex justify-between"
              >

                <div>

                  <h4 className="font-medium">

                    {producto.nombre}

                  </h4>

                  <p className="text-sm text-gray-500">

                    Cantidad: {producto.cantidad}

                  </p>

                </div>

                <strong>

                  $
                  {(
                    producto.precio *
                    producto.cantidad
                  ).toLocaleString()}

                </strong>

              </div>

            ))}

          </div>

          <hr className="my-6" />

          {/* Cupón */}

          <div>

            <label className="block text-sm font-medium mb-2">

              Cupón de Descuento

            </label>

            <div className="flex gap-2">

              <input
                type="text"
                placeholder="APEX2026"
                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#c9a84c]"
              />

              <button
                className="bg-[#c9a84c] hover:bg-[#b8943d] text-white px-5 rounded-xl transition"
              >

                Aplicar

              </button>

            </div>

          </div>

          <hr className="my-6" />

          {/* Totales */}

          <div className="space-y-4">

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

                -${descuento.toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-600">

                Envío

              </span>

              <span className="text-green-600 font-semibold">

                GRATIS

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

              <span className="text-xl font-bold">

                Total

              </span>

              <span className="text-3xl font-bold text-[#c9a84c]">

                ${total.toLocaleString()}

              </span>

            </div>

          </div>

          {/* Beneficios */}

          <div className="mt-8 space-y-4">

            <div className="flex gap-3">

              <ShieldCheck
                className="text-green-600"
              />

              <span className="text-sm">

                Compra protegida

              </span>

            </div>

            <div className="flex gap-3">

              <Truck
                className="text-blue-600"
              />

              <span className="text-sm">

                Envío Gratis

              </span>

            </div>

            <div className="flex gap-3">

              <CreditCard
                className="text-purple-600"
              />

              <span className="text-sm">

                Pago seguro

              </span>

            </div>

            <div className="flex gap-3">

              <Tag
                className="text-orange-500"
              />

              <span className="text-sm">

                Descuento aplicado

              </span>

            </div>

          </div>

          {/* Botón */}

          <button
            className="mt-8 w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-4 rounded-xl font-semibold transition flex justify-center items-center gap-2"
          >

            <CheckCircle2 size={20} />

            Confirmar Pedido

          </button>

          {/* Regresar */}

          <Link
            href="/dashboard/cliente/carrito"
            className="block text-center mt-5 text-gray-500 hover:text-black transition"
          >

            ← Regresar al carrito

          </Link>

        </div>

      </div>

    </aside>

  );

}