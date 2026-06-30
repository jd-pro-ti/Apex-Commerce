"use client";

import { useState } from "react";
import {
  Truck,
  Zap,
  Store,
  CheckCircle2,
} from "lucide-react";

export default function ShippingOptions() {
  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("estandar");

  const opciones = [
    {
      id: "estandar",
      titulo: "Envío Estándar",
      descripcion: "Entrega de 3 a 5 días hábiles.",
      precio: 99,
      icono: Truck,
    },
    {
      id: "express",
      titulo: "Envío Express",
      descripcion: "Entrega en las próximas 24 horas.",
      precio: 199,
      icono: Zap,
    },
    {
      id: "tienda",
      titulo: "Recoger en Tienda",
      descripcion: "Disponible el mismo día.",
      precio: 0,
      icono: Store,
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 mt-8">

      <h2 className="text-3xl font-light mb-2">
        Método de Envío
      </h2>

      <p className="text-gray-500 mb-8">
        Selecciona cómo deseas recibir tu pedido.
      </p>

      <div className="space-y-5">

        {opciones.map((opcion) => {

          const Icono = opcion.icono;

          const activo =
            opcionSeleccionada === opcion.id;

          return (

            <button
              key={opcion.id}
              type="button"
              onClick={() =>
                setOpcionSeleccionada(opcion.id)
              }
              className={`w-full border rounded-2xl p-6 transition flex justify-between items-center ${
                activo
                  ? "border-[#c9a84c] bg-[#fffaf0]"
                  : "border-gray-200 hover:border-[#c9a84c]"
              }`}
            >

              <div className="flex gap-5 items-center">

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    activo
                      ? "bg-[#c9a84c] text-white"
                      : "bg-gray-100"
                  }`}
                >

                  <Icono size={28} />

                </div>

                <div className="text-left">

                  <h3 className="text-lg font-semibold">
                    {opcion.titulo}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {opcion.descripcion}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-2xl font-bold text-[#c9a84c]">

                  {opcion.precio === 0
                    ? "Gratis"
                    : `$${opcion.precio}`}

                </p>

                {activo && (
                  <CheckCircle2
                    className="ml-auto mt-2 text-green-600"
                    size={24}
                  />
                )}

              </div>

            </button>

          );
        })}

      </div>

    </section>
  );
}