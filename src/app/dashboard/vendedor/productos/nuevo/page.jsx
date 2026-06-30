"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  Upload,
  Plus,
  X,
  ArrowLeft,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos iniciales vacíos
const initialFormData = {
  title: "",
  description: "",
  price: "",
  stock: "",
  sku: "",
  condition: "Nuevo",
  primaryCategory: "",
  subCategory: "",
  visibility: "Público",
  images: [],
  shipping: {
    standard: "",
    express: "",
  },
};

const categories = ["Relojes", "Artículos de Lujo", "Accesorios", "Calzado", "Ropa", "Joyería"];
const conditions = ["Nuevo", "Como Nuevo", "Excelente (Usado)", "Muy Bueno", "Bueno"];

export default function CrearProductoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      shipping: { ...prev.shipping, [name]: parseFloat(value) || 0 },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Producto creado:", formData);
      router.push("/vendedor/productos");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[var(--off-white)] min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-opensans text-[var(--medium-gray)] mb-4">
            <Link href="/dashboard/vendedor/productos" className="hover:text-[var(--black)] transition">
              Productos
            </Link>
            <span>/</span>
            <span className="text-[var(--black)]">Añadir Producto</span>
          </div>

          {/* Encabezado */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-montserrat font-light text-[var(--black)] tracking-tight">
                Nuevo Producto
              </h1>
              <p className="text-[var(--medium-gray)] font-opensans text-sm mt-1">
                Añade un nuevo producto a tu catálogo de lujo.
              </p>
            </div>
          </div>

          {/* Formulario con grid de 2 columnas */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            
            {/* === Columna 1 === */}

            {/* Información General */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-6">
                Información General
              </h3>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                >
                  TÍTULO DEL PRODUCTO
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ej. Patek Philippe Nautilus"
                  className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                >
                  DESCRIPCIÓN
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe las características de tu producto..."
                  className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition resize-y"
                />
              </div>
            </div>

            {/* Imágenes del Producto */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-4">
                Imágenes del Producto
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {/* No hay imágenes iniciales, solo botones */}
                <label className="flex items-center gap-2 px-5 py-2.5 border border-[var(--lighter-gray)] rounded-xl bg-[var(--white)] hover:bg-[var(--off-white)] transition cursor-pointer font-opensans text-sm text-[var(--black)]">
                  <Upload className="h-4 w-4" />
                  Subir
                  <input type="file" accept="image/*" className="hidden" />
                </label>
                <button
                  type="button"
                  className="flex items-center gap-2 px-5 py-2.5 border border-[var(--lighter-gray)] rounded-xl bg-[var(--white)] hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]"
                >
                  <Plus className="h-4 w-4" />
                  Agregar imagen
                </button>
              </div>
              <p className="text-xs text-[var(--medium-gray)] mt-4 font-opensans">
                Sube imágenes de tu producto para mostrarlo en el catálogo.
              </p>
            </div>

            {/* Precio e Inventario */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-6">
                Precio e Inventario
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    PRECIO (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--medium-gray)] font-opensans">
                      $
                    </span>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="stock"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    CANTIDAD EN STOCK
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="0"
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sku"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    SKU
                  </label>
                  <input
                    id="sku"
                    name="sku"
                    type="text"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="Ej. LX-88621"
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="condition"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    CONDICIÓN
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  >
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>
                        {cond}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Categorización */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-6">
                Categorización
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="primaryCategory"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    CATEGORÍA PRINCIPAL
                  </label>
                  <select
                    id="primaryCategory"
                    name="primaryCategory"
                    value={formData.primaryCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  >
                    <option value="">Seleccionar</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subCategory"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    SUBCATEGORÍA
                  </label>
                  <select
                    id="subCategory"
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  >
                    <option value="">Seleccionar</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="visibility"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    VISIBILIDAD
                  </label>
                  <select
                    id="visibility"
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                  >
                    <option value="Público">Público</option>
                    <option value="Privado">Privado</option>
                    <option value="No listado">No listado</option>
                  </select>
                  <p className="text-xs text-[var(--medium-gray)] mt-1 font-opensans">
                    Visible para todos los compradores
                  </p>
                </div>
              </div>
            </div>

            {/* Envío */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-2">
                Envío
              </h3>
              <p className="text-sm text-[var(--medium-gray)] font-opensans mb-6">
                Calcula los costos y tiempos de envío según la ubicación de tu almacén.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="standard"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    Estándar Terrestre
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--medium-gray)] font-opensans">
                      $
                    </span>
                    <input
                      id="standard"
                      name="standard"
                      type="number"
                      step="0.01"
                      value={formData.shipping.standard}
                      onChange={handleShippingChange}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                    />
                  </div>
                  <p className="text-xs text-[var(--medium-gray)] mt-1 font-opensans">Gratis</p>
                </div>
                <div>
                  <label
                    htmlFor="express"
                    className="block text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider mb-1.5"
                  >
                    Express Asegurado
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--medium-gray)] font-opensans">
                      $
                    </span>
                    <input
                      id="express"
                      name="express"
                      type="number"
                      step="0.01"
                      value={formData.shipping.express}
                      onChange={handleShippingChange}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* === Columna 2 - Acciones (Save + Cancel) === */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-6">
                  Acciones
                </h3>
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 bg-[var(--black)] text-white px-8 h-12 rounded-xl hover:bg-[var(--black-light)] transition font-opensans font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed w-full"
                  >
                    <Save className="h-4 w-4" />
                    {isSubmitting ? "Guardando..." : "Crear Producto"}
                  </button>
                  <Link
                    href="/vendedor/productos"
                    className="flex items-center justify-center gap-2 border border-[var(--lighter-gray)] px-8 h-12 rounded-xl bg-[var(--white)] hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)] w-full"
                  >
                    Cancelar
                  </Link>
                </div>
              </div>
            </div>

            {/* No hay card de eliminar para creación */}

          </form>
        </div>
      </main>
    </>
  );
}