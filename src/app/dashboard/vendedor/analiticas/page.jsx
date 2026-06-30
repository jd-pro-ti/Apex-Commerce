"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  ArrowUp,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos mock
const metrics = [
  {
    label: "INGRESOS BRUTOS",
    value: "$248,390.00",
    change: "+12.5% en el último mes",
    trend: "up",
    icon: DollarSign,
    color: "bg-[var(--black)]",
  },
  {
    label: "TASA DE CONVERSIÓN",
    value: "3.42%",
    change: "+1.8% en el último mes",
    trend: "up",
    icon: TrendingUp,
    color: "bg-[var(--gold)]",
  },
  {
    label: "PEDIDOS ACTIVOS",
    value: "1,124",
    change: "— Rendimiento estable",
    trend: "neutral",
    icon: ShoppingBag,
    color: "bg-[#1e293b]",
  },
  {
    label: "VALOR PROMEDIO DE PEDIDO",
    value: "$220.98",
    change: "+2.1% en el último mes",
    trend: "up",
    icon: Users,
    color: "bg-green-600",
  },
];

const categoryData = [
  { label: "ROPA", percentage: 42 },
  { label: "ARTÍCULOS DE CUERO", percentage: 28 },
  { label: "RELOMETRÍA", percentage: 18 },
  { label: "OTROS", percentage: 12 },
];

const geographicData = [
  { region: "América del Norte", percentage: 48 },
  { region: "Europa", percentage: 31 },
  { region: "Asia/Pacífico", percentage: 21 },
];

const ageData = [
  { range: "18-24", percentage: 18 },
  { range: "25-34", percentage: 25 },
  { range: "35-44", percentage: 35 },
  { range: "45+", percentage: 15 },
];

const productPerformance = [
  {
    name: "Bolso Midnight Epsom",
    versions: 14209,
    sales: 542,
    revenue: 86178,
    convRate: 3.81,
    trend: "up",
  },
  {
    name: "Cronógrafo Oryx II",
    versions: 9832,
    sales: 312,
    revenue: 46488,
    convRate: 3.17,
    trend: "up",
  },
  {
    name: "Blazer de Lino Heritage",
    versions: 22145,
    sales: 198,
    revenue: 34650,
    convRate: 0.89,
    trend: "up",
  },
];

// Datos para gráfico de barras (simulado)
const salesData = [
  { day: "Lun", value: 45 },
  { day: "Mar", value: 52 },
  { day: "Mié", value: 38 },
  { day: "Jue", value: 65 },
  { day: "Vie", value: 58 },
  { day: "Sáb", value: 72 },
  { day: "Dom", value: 48 },
];

export default function AnaliticasPage() {
  const [timeRange, setTimeRange] = useState("Semanal");

  const maxSales = Math.max(...salesData.map((d) => d.value));

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[var(--off-white)] min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="mb-8">
            <h1 className="text-3xl font-montserrat font-light text-[var(--black)] tracking-tight">
              Analíticas de Rendimiento
            </h1>
            <p className="text-[var(--medium-gray)] font-opensans text-sm mt-1">
              Análisis detallado del rendimiento de tus ventas y alcance de audiencia.
            </p>
          </div>

          {/* Tarjetas de métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs font-plusjakarta font-semibold text-[var(--medium-gray)] uppercase tracking-wider">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-montserrat font-bold text-[var(--black)] mt-2">
                        {metric.value}
                      </p>
                      <p
                        className={`text-xs font-opensans mt-1 ${
                          metric.trend === "up"
                            ? "text-emerald-600"
                            : metric.trend === "down"
                            ? "text-red-600"
                            : "text-[var(--medium-gray)]"
                        }`}
                      >
                        {metric.change}
                      </p>
                    </div>
                    <div
                      className={`p-2.5 rounded-lg ${metric.color} text-white shrink-0 ml-3`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gráfico de ventas + Category Split + Geographic Demand en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Gráfico de ventas (2 columnas) */}
            <div className="lg:col-span-2 bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h3 className="text-lg font-montserrat font-semibold text-[var(--black)]">
                  Ventas en el Tiempo
                </h3>
                <div className="flex gap-2 mt-3 sm:mt-0">
                  {["Diario", "Semanal", "Mensual"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTimeRange(tab)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-opensans font-medium transition ${
                        timeRange === tab
                          ? "bg-[var(--black)] text-white"
                          : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Barras del gráfico */}
              <div className="flex items-end justify-between h-48 gap-2">
                {salesData.map((item, index) => {
                  const height = (item.value / maxSales) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full bg-[var(--gold)] rounded-t-md transition-all hover:bg-[var(--gold-dark)]"
                        style={{
                          height: `${height}%`,
                          minHeight: "4px",
                          transition: "height 0.5s ease",
                        }}
                      />
                      <span className="text-xs font-opensans text-[var(--medium-gray)] mt-1">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-[var(--medium-gray)] font-opensans mt-4 text-center">
                Métricas de ingresos de los últimos 30 días
              </p>
            </div>

            {/* Category Split (1 columna) */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-4">
                Distribución por Categoría
              </h3>
              <p className="text-xs text-[var(--medium-gray)] font-opensans mb-4">
                Participación de ingresos por vertical
              </p>
              <div className="space-y-3">
                {categoryData.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex justify-between text-sm font-opensans">
                      <span className="text-[var(--black)]">{cat.label}</span>
                      <span className="text-[var(--medium-gray)]">
                        {cat.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[var(--off-white)] rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-[var(--gold)] rounded-full"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Geographic Demand + Customer Profile en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Geographic Demand (2 columnas) */}
            <div className="lg:col-span-2 bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-4">
                Demanda Geográfica
              </h3>
              <div className="space-y-4">
                {geographicData.map((item) => (
                  <div key={item.region}>
                    <div className="flex justify-between text-sm font-opensans">
                      <span className="text-[var(--black)]">{item.region}</span>
                      <span className="text-[var(--medium-gray)]">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[var(--off-white)] rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-[var(--black)] rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Profile (1 columna) */}
            <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] p-6 md:p-8">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)] mb-4">
                Perfil del Cliente
              </h3>
              <p className="text-xs text-[var(--medium-gray)] font-opensans mb-4">
                DETERMINACIÓN DE EDAD
              </p>
              <div className="space-y-2">
                {ageData.map((age) => (
                  <div key={age.range} className="flex items-center gap-3">
                    <span className="text-sm font-opensans text-[var(--medium-gray)] w-12">
                      {age.range}
                    </span>
                    <div className="flex-1 h-1.5 bg-[var(--off-white)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--gold)] rounded-full"
                        style={{ width: `${age.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-opensans text-[var(--black)] font-medium w-12 text-right">
                      {age.percentage}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--lighter-gray)]">
                <p className="text-2xl font-montserrat font-bold text-[var(--black)]">
                  62% <span className="text-sm font-opensans font-normal text-[var(--medium-gray)]">FORMULARIO</span>
                </p>
                <p className="text-sm text-[var(--medium-gray)] font-opensans mt-1">
                  Alta propensión a compras repetidas en accesorios de lujo.
                </p>
              </div>
            </div>
          </div>

          {/* Product Performance Breakdown */}
          <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[var(--lighter-gray)]">
              <h3 className="text-lg font-montserrat font-semibold text-[var(--black)]">
                Desglose de Rendimiento de Productos
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-opensans">
                <thead>
                  <tr className="text-left text-[var(--medium-gray)] bg-[var(--off-white)] border-b border-[var(--lighter-gray)]">
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      NOMBRE DEL PRODUCTO
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      VERSIONES
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      VENTAS
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      INGRESOS
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      TASA DE CONV.
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      TENDENCIA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productPerformance.map((product, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[var(--lighter-gray)] hover:bg-[var(--off-white)] transition ${
                        index === productPerformance.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-[var(--black)] font-medium">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-[var(--medium-gray)]">
                        {product.versions.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-[var(--black)]">
                        {product.sales}
                      </td>
                      <td className="px-6 py-4 font-semibold text-[var(--black)]">
                        ${product.revenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-[var(--black)]">
                        {product.convRate.toFixed(2)}%
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-emerald-600">✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-[var(--lighter-gray)]">
              <Link
                href="/vendedor/productos"
                className="text-sm font-opensans text-[var(--gold)] hover:underline flex items-center gap-1"
              >
                VER TODOS LOS PRODUCTOS (124)
                <ArrowUp className="h-3 w-3 rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}