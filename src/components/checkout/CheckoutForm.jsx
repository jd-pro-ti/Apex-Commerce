"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    calle: "",
    numero: "",
    colonia: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    referencias: "",
  });

  const cambiarValor = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    alert("Información guardada correctamente.");
  };

  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">

      <h2 className="text-3xl font-light mb-2">
        Información de Envío
      </h2>

      <p className="text-gray-500 mb-8">
        Completa los datos para realizar el envío de tu pedido.
      </p>

      <form onSubmit={enviarFormulario}>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Nombre */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={cambiarValor}
              placeholder="José Alfredo"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Apellidos */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Apellidos
            </label>

            <input
              type="text"
              name="apellidos"
              value={formulario.apellidos}
              onChange={cambiarValor}
              placeholder="López Hernández"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Correo */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Correo Electrónico
            </label>

            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={cambiarValor}
              placeholder="correo@ejemplo.com"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Teléfono */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Teléfono
            </label>

            <input
              type="tel"
              name="telefono"
              value={formulario.telefono}
              onChange={cambiarValor}
              placeholder="4771234567"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Calle */}

          <div className="md:col-span-2">

            <label className="block text-sm font-medium mb-2">
              Calle
            </label>

            <input
              type="text"
              name="calle"
              value={formulario.calle}
              onChange={cambiarValor}
              placeholder="Av. Universidad"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Número */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Número Exterior
            </label>

            <input
              type="text"
              name="numero"
              value={formulario.numero}
              onChange={cambiarValor}
              placeholder="245"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Colonia */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Colonia
            </label>

            <input
              type="text"
              name="colonia"
              value={formulario.colonia}
              onChange={cambiarValor}
              placeholder="Centro"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Ciudad */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Ciudad
            </label>

            <input
              type="text"
              name="ciudad"
              value={formulario.ciudad}
              onChange={cambiarValor}
              placeholder="León"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Estado */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Estado
            </label>

            <select
              name="estado"
              value={formulario.estado}
              onChange={cambiarValor}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            >
              <option value="">Selecciona un estado</option>
              <option>Ciudad de México</option>
              <option>Jalisco</option>
              <option>Nuevo León</option>
              <option>Guanajuato</option>
              <option>Querétaro</option>
              <option>Puebla</option>
              <option>Yucatán</option>
              <option>Veracruz</option>
              <option>Estado de México</option>
            </select>

          </div>

          {/* Código Postal */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Código Postal
            </label>

            <input
              type="text"
              name="codigoPostal"
              value={formulario.codigoPostal}
              onChange={cambiarValor}
              placeholder="37260"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

          {/* Referencias */}

          <div className="md:col-span-2">

            <label className="block text-sm font-medium mb-2">
              Referencias del domicilio
            </label>

            <textarea
              rows={4}
              name="referencias"
              value={formulario.referencias}
              onChange={cambiarValor}
              placeholder="Casa blanca con portón negro, frente al parque..."
              className="w-full border rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-[#c9a84c] outline-none"
            />

          </div>

        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-[#c9a84c] hover:bg-[#b8943d] text-white py-4 rounded-xl font-semibold transition"
        >
          Guardar Información
        </button>

      </form>

    </section>
  );
}