"use client";

import {
  ShoppingCart,
  MapPin,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const pasos = [
  {
    id: 1,
    titulo: "Carrito",
    descripcion: "Productos",
    icono: ShoppingCart,
    estado: "completado",
  },
  {
    id: 2,
    titulo: "Checkout",
    descripcion: "Información",
    icono: MapPin,
    estado: "activo",
  },
  {
    id: 3,
    titulo: "Pago",
    descripcion: "Método",
    icono: CreditCard,
    estado: "pendiente",
  },
  {
    id: 4,
    titulo: "Confirmación",
    descripcion: "Finalizar",
    icono: CheckCircle2,
    estado: "pendiente",
  },
];

export default function CheckoutProgress() {
  return (
    <section className="mb-12">

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

        <div className="grid grid-cols-4 gap-6">

          {pasos.map((paso) => {

            const Icono = paso.icono;

            const fondo =
              paso.estado === "completado"
                ? "bg-green-500 text-white"
                : paso.estado === "activo"
                ? "bg-[#c9a84c] text-white"
                : "bg-gray-200 text-gray-500";

            return (

              <div
                key={paso.id}
                className="flex flex-col items-center text-center"
              >

                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${fondo}`}
                >

                  <Icono size={28} />

                </div>

                <h3 className="mt-4 font-semibold">
                  {paso.titulo}
                </h3>

                <p className="text-sm text-gray-500">
                  {paso.descripcion}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}