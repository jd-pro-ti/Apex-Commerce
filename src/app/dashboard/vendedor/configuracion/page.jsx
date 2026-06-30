"use client";

import { useState } from "react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";
import { ShieldCheck, CheckCircle2, Building2, HelpCircle } from "lucide-react";

export default function ConfiguracionTiendaPage() {
  // Estados para los inputs mock
  const [storeName, setStoreName] = useState("Aurum Collections");
  const [publicEmail, setPublicEmail] = useState("contact@aurum-luxury.com");
  const [storeBio, setStoreBio] = useState(
    "Curadores de joyería fina artesanal y obras maestras de la horología. Nuestra tienda cuenta con una colección rotativa de artículos de lujo raros, vintage y contemporáneos."
  );

  return (
    <>
      <NavbarVendedor />

      <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Encabezado Principal */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Perfil de la Tienda
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Administra tu escaparate público e identidad de vendedor en el ecosistema de LuxeMarket.
              </p>
            </div>
            
            {/* Botones de acción del encabezado */}
            <div className="flex items-center gap-3">
              <button className="border border-slate-200 bg-white px-5 py-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-700 shadow-sm">
                Descartar Cambios
              </button>
              <button className="bg-[#1e293b] text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition text-sm font-medium shadow-sm">
                Guardar Perfil
              </button>
            </div>
          </div>

          {/* Grid de Contenido Principal (Distribución idéntica a image_411aa2.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* COLUMNA IZQUIERDA (2/3 de ancho) - Identidad, Marca y Políticas */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Bloque 1: Identidad Pública */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h2 className="text-base font-medium text-slate-800 mb-6 flex items-center gap-2">
                  👤 Identidad Pública
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Nombre de la tienda
                      </label>
                      <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-slate-300 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Correo electrónico público
                      </label>
                      <input
                        type="email"
                        value={publicEmail}
                        onChange={(e) => setPublicEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-slate-300 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Biografía de la tienda
                    </label>
                    <textarea
                      rows={5}
                      value={storeBio}
                      onChange={(e) => setStoreBio(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-slate-300 font-medium resize-none leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 2: Branding Visual */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h2 className="text-base font-medium text-slate-800 mb-6 flex items-center gap-2">
                  🖼️ Branding Visual
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Logo de la Tienda
                    </label>
                    <div className="aspect-square bg-[#f3efe6] border border-dashed border-slate-200 rounded-2xl flex items-center justify-center p-8 shadow-inner cursor-pointer hover:bg-[#eae5da] transition">
                      {/* Logo abstracto similar a la imagen */}
                      <span className="text-4xl filter grayscale contrast-125 opacity-70">🐚</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Imagen del Banner (Hero)
                    </label>
                    <div className="h-full min-h-[180px] md:min-h-0 aspect-[16/10] md:aspect-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80" // Imagen elegante de interiores
                        alt="Banner de la tienda"
                        className="w-full h-full object-cover opacity-80 filter brightness-75"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloque 3: Políticas de la Tienda */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h2 className="text-base font-medium text-slate-800 mb-6 flex items-center gap-2">
                  📜 Políticas de la Tienda
                </h2>
                
                <div className="space-y-4">
                  {/* Política 1 */}
                  <div className="border border-slate-100 rounded-xl p-5 flex items-start justify-between gap-4 bg-white hover:border-slate-200 transition">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Envío y Entrega</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Define tus tiempos de tránsito y tarifas de manejo.</p>
                      <p className="text-xs text-slate-600 italic mt-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        &ldquo;Envío global asegurado de cortesía en todos los pedidos superiores a $5,000. Entrega express dentro de 3 a 5 días hábiles.&rdquo;
                      </p>
                    </div>
                    <button className="text-xs font-semibold text-blue-600 hover:underline">Editar</button>
                  </div>

                  {/* Política 2 */}
                  <div className="border border-slate-100 rounded-xl p-5 flex items-start justify-between gap-4 bg-white hover:border-slate-200 transition">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Devoluciones y Cambios</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Establece las expectativas para las cancelaciones de clientes.</p>
                      <p className="text-xs text-slate-600 italic mt-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        &ldquo;Plazo de devolución de 14 días para artículos en su estado original. Las etiquetas de autenticidad deben permanecer intactas.&rdquo;
                      </p>
                    </div>
                    <button className="text-xs font-semibold text-blue-600 hover:underline">Editar</button>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (1/3 de ancho) - Verificación, Pagos y Peligro */}
            <div className="space-y-6">
              
              {/* Tarjeta 1: Verificación */}
              <div className="bg-[#0f172a] text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium tracking-wide">Verificación</h3>
                  <span className="bg-[#fef3c7] text-[#b45309] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Activo
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-amber-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">LuxeVerified Platinum</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Identidad y Negocio Verificados</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Documento de Identificación Fiscal</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Pasaporte / ID</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between text-slate-300 pt-1">
                    <span>Comprobante de Domicilio</span>
                    <button className="text-xs font-semibold text-amber-400 hover:underline">Actualizar</button>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2: Configuración de Pagos */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                  Configuración de Pagos
                </h3>
                
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-5">
                  <div className="flex items-center gap-2 text-slate-800 font-medium text-sm mb-1">
                    <Building2 className="h-4 w-4 text-slate-500" />
                    <span>Chase Bank NA</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Pagos programados: Todos los lunes</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-xs font-mono font-medium text-slate-600">•••• 8829</span>
                    <button className="text-[11px] font-bold text-slate-700 hover:text-black tracking-wide uppercase">
                      Cambiar
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Preferencia de Moneda
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-700 font-medium focus:outline-none cursor-pointer">
                    <option>USD - Dólar Estadounidense</option>
                    <option>MXN - Peso Mexicano</option>
                    <option>EUR - Euro</option>
                  </select>
                </div>
              </div>

              {/* Tarjeta 3: Desactivar Tienda */}
              <div className="bg-red-50/40 rounded-2xl border border-red-100 p-6">
                <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                  Desactivar Tienda
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Elimina permanentemente tu escaparate público de LuxeMarket. Esta acción no se puede deshacer.
                </p>
                <button className="w-full bg-white hover:bg-red-50 text-red-600 border border-red-200 text-xs font-semibold py-3 px-4 rounded-xl transition shadow-sm">
                  Desactivar Cuenta Mercantil
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}