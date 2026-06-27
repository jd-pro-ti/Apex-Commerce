"use client";

import { useAuth } from "@/context/AuthContext";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";
import { Container } from "@/components/ui/Container";
import { Package, ShoppingBag, TrendingUp, DollarSign } from "lucide-react";

// Datos locales simulados para que funcione sin Back-End
const kpisSimulados = [
  { id: 1, titulo: "Ventas Totales", valor: "$124,592.00", cambio: "+14%", tipoCambio: "positivo", icono: DollarSign },
  { id: 2, titulo: "Pedidos Activos", valor: "1,842", cambio: "+8%", tipoCambio: "positivo", icono: ShoppingBag },
  { id: 3, titulo: "Productos Publicados", valor: "48", cambio: "-2%", tipoCambio: "negativo", icono: Package },
  { id: 4, titulo: "Crecimiento Semanal", valor: "12.4%", cambio: "+22%", tipoCambio: "positivo", icono: TrendingUp },
];

const ultimosPedidosSimulados = [
  { id: "#LX-9021", cliente: "Sophia Millar", iniciales: "SM", producto: "Aurelian Gold Watch", total: "$1,250.00", estado: "En Proceso" },
  { id: "#LX-8942", cliente: "Julian Daxon", iniciales: "JD", producto: "Suede Travel Duffle", total: "$540.00", estado: "Cancelado" },
  { id: "#LX-8812", cliente: "Elana Hudson", iniciales: "EH", producto: "Cashmere Throw", total: "$290.00", estado: "Enviado" },
  { id: "#LX-8765", cliente: "Marcus Raad", iniciales: "MR", producto: "Onyx Cufflinks", total: "$180.00", estado: "Enviado" },
];

const productosTopSimulados = [
  { id: 1, nombre: "Aurelian Ceramic Watch", ventas: "324 Ventas este mes", precio: "$1,250" },
  { id: 2, nombre: "Sienna Leather Tote", ventas: "218 Ventas este mes", precio: "$890" },
  { id: 3, nombre: "Obsidian Audio Pro", ventas: "156 Ventas este mes", precio: "$350" },
  { id: 4, nombre: "Cashmere Blend Coat", ventas: "94 Ventas este mes", precio: "$2,100" },
];

export default function VendedorDashboard() {
  const { user } = useAuth();

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[var(--off-white)] min-h-screen animate-fade-in">
        <Container>
          
          {/* Encabezado Principal */}
          <div className="mb-10">
            <h1 className="text-[var(--black)] mb-2 font-montserrat font-light">
              Buen día, Diego.
            </h1>
            <p className="text-[var(--medium-gray)] font-opensans font-light">
              El rendimiento de tu tienda ha subido un <span className="text-emerald-600 font-opensans font-medium">12.4%</span> esta semana en comparación con la anterior.
            </p>
          </div>

          {/* Sección de KPIs / Tarjetas de Métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kpisSimulados.map((kpi, idx) => {
              const IconoComponente = kpi.icono;
              return (
                <div 
                  key={kpi.id} 
                  className="bg-[var(--white)] p-6 rounded-2xl border border-[var(--lighter-gray)] hover-lift flex flex-col justify-between h-44 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-[var(--off-white)] rounded-xl text-[var(--black-light)]">
                      <IconoComponente size={20} strokeWidth={1.5} />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-plusjakarta font-semibold ${
                      kpi.tipoCambio === 'positivo' 
                        ? 'bg-emerald-50 text-emerald-600' 
                        : 'bg-rose-50 text-rose-600'
                    }`}>
                      {kpi.cambio}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-xs font-plusjakarta font-medium uppercase tracking-wider text-[var(--medium-gray)] block mb-1">
                      {kpi.titulo}
                    </span>
                    <h3 className="text-[var(--black)] font-montserrat font-light tracking-tight m-0 p-0">
                      {kpi.valor}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bloque de Dos Columnas: Pedidos Recientes y Productos Top */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Columna Izquierda: Pedidos Recientes */}
            <div className="lg:col-span-2 bg-[var(--white)] p-6 rounded-2xl border border-[var(--lighter-gray)]">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[var(--black)] font-montserrat font-normal m-0">Pedidos Recientes</h4>
                <button className="text-xs font-plusjakarta font-medium text-[var(--gold)] hover:underline tracking-wide transition-all">
                  Ver todos los pedidos
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--lighter-gray)] text-[var(--medium-gray)] text-xs font-plusjakarta font-medium uppercase tracking-wider">
                      <th className="pb-3">ID Pedido</th>
                      <th className="pb-3">Cliente</th>
                      <th className="pb-3">Producto</th>
                      <th className="pb-3">Total</th>
                      <th className="pb-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--lighter-gray)] text-sm font-opensans font-light">
                    {ultimosPedidosSimulados.map((pedido) => (
                      <tr key={pedido.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 font-montserrat text-xs text-[var(--black)]">{pedido.id}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--off-white)] flex items-center justify-center text-xs font-plusjakarta font-medium text-[var(--black)]">
                              {pedido.iniciales}
                            </div>
                            <span className="text-[var(--black)] font-opensans">{pedido.cliente}</span>
                          </div>
                        </td>
                        <td className="py-4 text-[var(--medium-gray)] font-opensans">{pedido.producto}</td>
                        <td className="py-4 font-montserrat font-normal text-[var(--black)]">{pedido.total}</td>
                        <td className="py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-plusjakarta font-medium ${
                            pedido.estado === 'En Proceso' ? 'bg-amber-50 text-amber-600' :
                            pedido.estado === 'Enviado' ? 'bg-blue-50 text-blue-600' :
                            'bg-rose-50 text-rose-600'
                          }`}>
                            {pedido.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Columna Derecha: Productos Más Vendidos */}
            <div className="bg-[var(--white)] p-6 rounded-2xl border border-[var(--lighter-gray)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[var(--black)] font-montserrat font-normal m-0">Productos Más Vendidos</h4>
                  <button className="text-[var(--medium-gray)] hover:text-[var(--black)] font-plusjakarta font-bold">
                    •••
                  </button>
                </div>

                <div className="space-y-4">
                  {productosTopSimulados.map((prod) => (
                    <div key={prod.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[var(--black-light)] flex items-center justify-center text-[var(--gold)] font-montserrat font-bold text-xs">
                          APEX
                        </div>
                        <div>
                          <p className="text-sm font-opensans font-medium text-[var(--black)] p-0 m-0 leading-tight">
                            {prod.nombre}
                          </p>
                          <span className="text-xs font-opensans text-[var(--medium-gray)]">
                            {prod.ventas}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-montserrat font-semibold text-[var(--black)]">
                        {prod.precio}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-[var(--off-white)] hover:bg-[var(--lighter-gray)] text-[var(--black)] text-xs font-plusjakarta font-semibold rounded-xl tracking-wider uppercase transition-all">
                Explorar Inventario Completo
              </button>
            </div>

          </div>

        </Container>
      </main>
    </>
  );
}