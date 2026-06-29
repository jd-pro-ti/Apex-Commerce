import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartItem({
  producto,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex gap-6 hover:shadow-md transition">

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-32 h-32 rounded-lg object-cover"
      />

      <div className="flex-1">

        <h2 className="text-2xl font-semibold">
          {producto.nombre}
        </h2>

        <p className="text-gray-500 mt-2">
          {producto.descripcion}
        </p>

        <p className="text-3xl font-bold text-[#c9a84c] mt-4">
          ${producto.precio.toLocaleString()}
        </p>

        <div className="flex items-center gap-3 mt-6">

          <button
            onClick={() => disminuirCantidad(producto.id)}
            className="w-10 h-10 rounded-lg border hover:bg-gray-100"
          >
            <Minus className="mx-auto" size={18} />
          </button>

          <span className="text-xl font-semibold w-8 text-center">
            {producto.cantidad}
          </span>

          <button
            onClick={() => aumentarCantidad(producto.id)}
            className="w-10 h-10 rounded-lg border hover:bg-gray-100"
          >
            <Plus className="mx-auto" size={18} />
          </button>

          <button
            onClick={() => eliminarProducto(producto.id)}
            className="ml-6 text-red-500 hover:text-red-700"
          >
            <Trash2 />
          </button>

        </div>

      </div>

    </div>
  );
}