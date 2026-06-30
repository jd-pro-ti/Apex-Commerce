"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  Trash2,
  Upload,
  Eye,
  Plus,
  ArrowLeft,
  X,
  ChevronRight,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos mock del producto
const productData = {
  id: 1,
  title: "Patek Philippe Nautilus 5711/1A-010 Blue Dial",
  description:
    "El Patek Philippe Nautilus 5711/1A-010 es el reloj deportivo de lujo definitivo. Con su icónico bisel octogonal redondeado, la ingeniosa construcción de caja tipo oporto y su esfera con relieve horizontal, el Nautilus ha sido la personificación del reloj deportivo elegante desde 1976. Este modelo específico presenta la cotizada esfera degradada azul y un brazalete integrado de acero inoxidable.",
  price: 145000,
  stock: 1,
  sku: "PP-5711-BLU-001",
  condition: "Excelente (Usado)",
  primaryCategory: "Relojes",
  subCategory: "Artículos de Lujo",
  visibility: "Público",
  images: [
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=300&auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=300&auto=format&fit=crop&q=80",
  ],
  shipping: {
    standard: 0,
    express: 45.0,
  },
};

const categories = ["Relojes", "Artículos de Lujo", "Accesorios", "Calzado", "Ropa", "Joyería"];
const conditions = ["Excelente (Usado)", "Nuevo", "Como Nuevo", "Muy Bueno", "Bueno"];

export default function EditarProductoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState(productData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      console.log("Producto actualizado:", formData);
      router.push("/vendedor/productos");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Producto eliminado:", formData.id);
      router.push("/vendedor/productos");
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <>
      <NavbarVendedor />
      
      <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Enlace superior Atrás */}
          <div className="mb-4">
            <Link 
              href="/dashboard/vendedor/productos" 
              className="flex items-center gap-1 text-xs font-semibold tracking-wider text-slate-500 uppercase hover:text-slate-800 transition"
            >
              <ArrowLeft className="h-3 w-3" /> Volver a productos
            </Link>
          </div>

          {/* Encabezado Principal */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                {formData.title || "Sin título"}
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Modifica las especificaciones, cotización de precios y logística de este activo de alta gama.{" "}
                <span className="text-slate-400/60 font-medium">Última edición: hace 2 horas.</span>
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 bg-white rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-700 shadow-sm self-start md:self-auto">
              <Eye className="h-4 w-4 text-slate-500" />
              Ver Publicación en Vivo
            </button>
          </div>

          {/* Formulario Estructurado en Dos Columnas */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* COLUMNA IZQUIERDA (2/3 de ancho) - Detalles Básicos, Multimedia y Logística */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Bloque: Detalles Generales */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                  Información Básica
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="title" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Título Comercial del Producto
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-slate-300 font-medium"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Descripción de la Pieza (Narrativa de Lujo)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-slate-300 font-medium resize-none leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque: Galería Multimedia */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Galería de Imágenes
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                  {formData.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Producto ${index + 1}`}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 p-1.5 bg-slate-900/80 text-white rounded-full hover:bg-red-600 backdrop-blur-sm transition opacity-0 group-hover:opacity-100 shadow"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            images: prev.images.filter((_, i) => i !== index),
                          }));
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  
                  {/* Botón de carga/acción */}
                  <label className="aspect-square border-2 border-dashed border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition text-slate-500">
                    <Upload className="h-5 w-5 text-slate-400" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Subir</span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>
              </div>

              {/* Bloque: Logística de Envío */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Esquema de Distribución y Envío
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Tasas logísticas calculadas dinámicamente con base en las dimensiones y valor de seguro de bóveda.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="standard" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Envío Terrestre Estándar
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">$</span>
                      <input
                        id="standard"
                        name="standard"
                        type="number"
                        step="0.01"
                        value={formData.shipping.standard}
                        onChange={handleShippingChange}
                        className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-300"
                      />
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold tracking-wide uppercase mt-1.5 block">
                      ✓ Configurado como libre de cargo
                    </span>
                  </div>

                  <div>
                    <label htmlFor="express" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Servicio Express Asegurado
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">$</span>
                      <input
                        id="express"
                        name="express"
                        type="number"
                        step="0.01"
                        value={formData.shipping.express}
                        onChange={handleShippingChange}
                        className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (1/3 de ancho) - Fijación de Precios, Gestión de Inventario y Controles */}
            <div className="space-y-6">
              
              {/* Tarjeta: Gestión Comercial */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Precios e Inventario
                </h3>

                <div>
                  <label htmlFor="price" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Precio de Salida (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">$</span>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="stock" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Existencia (Stock)
                    </label>
                    <input
                      id="stock"
                      name="stock"
                      type="number"
                      value={formData.stock}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-slate-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="condition" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Estado de la Pieza
                    </label>
                    <select
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                    >
                      {conditions.map((cond) => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sku" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Código de Identificación (SKU)
                  </label>
                  <input
                    id="sku"
                    name="sku"
                    type="text"
                    value={formData.sku}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium text-slate-700 focus:outline-none focus:border-slate-300"
                  />
                </div>
              </div>

              {/* Tarjeta: Categorización y Canales */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Estructura de Catálogo
                </h3>

                <div>
                  <label htmlFor="primaryCategory" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Categoría de Indexación
                  </label>
                  <select
                    id="primaryCategory"
                    name="primaryCategory"
                    value={formData.primaryCategory}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="visibility" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Nivel de Privacidad
                  </label>
                  <select
                    id="visibility"
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="Público">Público</option>
                    <option value="Privado">Privado</option>
                    <option value="No listado">No indexado</option>
                  </select>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">
                    📍 Visible e indexable en los resultados globales de búsqueda.
                  </p>
                </div>
              </div>

              {/* Tarjeta: Panel de Acciones Finales */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-[#1e293b] text-white w-full h-12 rounded-xl hover:bg-slate-800 transition text-sm font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-4 w-4" />
                  {isSubmitting ? "Sincronizando..." : "Confirmar y Guardar"}
                </button>
                
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-slate-200 bg-white w-full h-12 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-700"
                >
                  Vista Previa Local
                </button>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
                    className="flex items-center justify-center gap-2 w-full h-11 bg-red-50/60 hover:bg-red-50 border border-red-100 text-red-600 rounded-xl transition text-xs font-semibold"
                  >
                    <Trash2 className="h-4 w-4" />
                    Retirar Producto de la Venta
                  </button>
                </div>
              </div>

            </div>

          </form>
        </div>
      </main>

      {/* Modal de Confirmación de Eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 md:p-8 border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              ¿Dar de baja esta publicación?
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Esta operación es irreversible. Los datos analíticos e historial de visualizaciones acumulados se purgarán por completo.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition text-sm font-medium text-slate-700"
              >
                Abortar
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition text-sm font-medium"
              >
                Eliminar Registro
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}