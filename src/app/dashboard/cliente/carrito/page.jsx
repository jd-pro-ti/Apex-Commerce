"use client";

import { useMemo, useState } from "react";

import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { Container } from "@/components/ui/Container";

import CartItem from "@/components/carrito/CartItem";
import CartSummary from "@/components/carrito/CartSummary";
import RecommendedProducts from "@/components/carrito/RecommendedProducts";
import EmptyCart from "@/components/carrito/EmptyCart";

const productosIniciales = [
  {
    id: 1,
    nombre: "MacBook Pro M4",
    descripcion: "Chip M4 • 16 GB RAM • SSD 512 GB",
    precio: 42999,
    cantidad: 1,
    stock: 5,
    envio: "Entrega estimada: Mañana",
    imagen:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=700",
  },
  {
    id: 2,
    nombre: "AirPods Pro 2",
    descripcion: "Cancelación Activa de Ruido",
    precio: 5999,
    cantidad: 2,
    stock: 18,
    envio: "Entrega estimada: 2 días",
    imagen:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700",
  },
  {
    id: 3,
    nombre: "Magic Keyboard",
    descripcion: "Teclado inalámbrico con Touch ID",
    precio: 3499,
    cantidad: 1,
    stock: 9,
    envio: "Entrega estimada: Mañana",
    imagen:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=700",
  },
];

export default function CarritoPage() {
  const [productos, setProductos] = useState(productosIniciales);

  const aumentarCantidad = (id) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad:
                producto.cantidad < producto.stock
                  ? producto.cantidad + 1
                  : producto.cantidad,
            }
          : producto
      )
    );
  };

  const disminuirCantidad = (id) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad:
                producto.cantidad > 1
                  ? producto.cantidad - 1
                  : producto.cantidad,
            }
          : producto
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos((productosActuales) =>
      productosActuales.filter((producto) => producto.id !== id)
    );
  };

  const vaciarCarrito = () => {
    setProductos([]);
  };

  const resumen = useMemo(() => {
    const subtotal = productos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );

    const totalProductos = productos.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );

    const descuento = subtotal >= 50000 ? 2500 : 0;

    const envio = subtotal >= 15000 || subtotal === 0 ? 0 : 299;

    const iva = Math.round((subtotal - descuento) * 0.16);

    const total = subtotal - descuento + envio + iva;

    return {
      subtotal,
      descuento,
      envio,
      iva,
      total,
      totalProductos,
    };
  }, [productos]);

  return (
    <>
      <NavbarCliente />

      <main className="min-h-screen bg-[#f5f5f0] pt-28 pb-20">

        <Container>

          <section className="mb-12">

            <span className="text-sm uppercase tracking-[0.3em] text-[#c9a84c]">
              Apex Commerce
            </span>

            <h1 className="mt-3 text-5xl font-light">
              Carrito de Compras
            </h1>

            <p className="mt-4 max-w-2xl text-gray-600">
              Revisa los productos seleccionados antes de continuar con el
              proceso de compra. Puedes modificar cantidades, eliminar
              artículos o continuar explorando el catálogo.
            </p>

          </section>

          <section className="mb-12 rounded-xl bg-white shadow-sm p-6">

            <div className="grid grid-cols-4 gap-4 text-center">

              <div>

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a84c] text-white font-bold">
                  1
                </div>

                <p className="font-medium">
                  Carrito
                </p>

              </div>

              <div>

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold">
                  2
                </div>

                <p className="text-gray-500">
                  Checkout
                </p>

              </div>

              <div>

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold">
                  3
                </div>

                <p className="text-gray-500">
                  Pago
                </p>

              </div>

              <div>

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold">
                  4
                </div>

                <p className="text-gray-500">
                  Confirmación
                </p>

              </div>

            </div>

          </section>

          {productos.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div className="grid gap-8 lg:grid-cols-3">

                <div className="space-y-6 lg:col-span-2">

                  {productos.map((producto) => (
                    <CartItem
                      key={producto.id}
                      producto={producto}
                      aumentarCantidad={aumentarCantidad}
                      disminuirCantidad={disminuirCantidad}
                      eliminarProducto={eliminarProducto}
                    />
                  ))}

                </div>

                <CartSummary
                  subtotal={resumen.subtotal}
                  descuento={resumen.descuento}
                  envio={resumen.envio}
                  iva={resumen.iva}
                  total={resumen.total}
                  totalProductos={resumen.totalProductos}
                  vaciarCarrito={vaciarCarrito}
                />

              </div>

              <RecommendedProducts />
            </>
          )}

        </Container>

      </main>
    </>
  );
}