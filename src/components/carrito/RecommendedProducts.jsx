"use client";

import { Heart, ShoppingCart, Star, Truck } from "lucide-react";

const productos = [
  {
    id: 1,
    nombre: "Apple Watch Series 10",
    precio: 11999,
    descuento: "10%",
    rating: 4.9,
    imagen:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700",
  },
  {
    id: 2,
    nombre: "iPad Air M3",
    precio: 16999,
    descuento: "15%",
    rating: 4.8,
    imagen:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700",
  },
  {
    id: 3,
    nombre: "Magic Mouse",
    precio: 2499,
    descuento: "5%",
    rating: 4.7,
    imagen:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=700",
  },
  {
    id: 4,
    nombre: "HomePod Mini",
    precio: 2799,
    descuento: "20%",
    rating: 4.9,
    imagen:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=700",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-light">
            También podría interesarte
          </h2>

          <p className="text-gray-500 mt-2">
            Productos recomendados para complementar tu compra.
          </p>

        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {productos.map((producto) => (

          <div
            key={producto.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200"
          >

            <div className="relative overflow-hidden">

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition"
              >
                <Heart size={18} />
              </button>

              <span
                className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
              >
                -{producto.descuento}
              </span>

            </div>

            <div className="p-6">

              <div className="flex items-center gap-2 mb-2">

                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={18}
                />

                <span className="font-medium">
                  {producto.rating}
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-2">

                {producto.nombre}

              </h3>

              <p className="text-3xl font-bold text-[#c9a84c]">

                ${producto.precio.toLocaleString()}

              </p>

              <div className="flex items-center gap-2 mt-4 text-green-600">

                <Truck size={18} />

                <span className="text-sm">
                  Envío Gratis
                </span>

              </div>

              <button
                className="mt-6 w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-3 rounded-xl flex justify-center items-center gap-2 transition"
              >

                <ShoppingCart size={18} />

                Agregar al carrito

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}