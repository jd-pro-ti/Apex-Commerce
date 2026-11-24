"use client";

import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { Container } from "@/components/ui/Container";

import CheckoutProgress from "@/components/checkout/CheckoutProgress";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import ShippingOptions from "@/components/checkout/ShippingOptions";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <>
      <NavbarCliente />

      <main className="pt-28 pb-20 bg-[#f5f5f0] min-h-screen">

        <Container>

          {/* Encabezado */}

          <div className="mb-10">

            <h1 className="text-5xl font-light">
              Finalizar Compra
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Completa la información para confirmar tu pedido.
            </p>

          <p className="mt-4 rounded-xl border border-[#c9a84c] bg-[#fffaf0] p-4 text-sm text-gray-800">
            Este sitio es un proyecto escolar de demostración. No cobramos ni vendemos
            los productos mostrados; los precios y el proceso de compra son ilustrativos.
          </p>

          </div>

          {/* Barra de progreso */}

          <CheckoutProgress />

          {/* Contenido */}

          <div className="grid lg:grid-cols-3 gap-10 mt-10">

            {/* Columna izquierda */}

            <div className="lg:col-span-2 space-y-8">

              <CheckoutForm />

              <ShippingOptions />

              <PaymentMethods />

            </div>

            {/* Columna derecha */}

            <OrderSummary />

          </div>

        </Container>

      </main>
    </>
  );
}
