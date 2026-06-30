"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Truck,
  DollarSign,
  XCircle,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos mock de órdenes
const ordersData = [
  {
    id: "#LX-98231",
    customer: "Eleanor Jacobs",
    date: "Oct 24, 2023",
    amount: 2450.00,
    paymentStatus: "Paid",
    fulfillment: "Pending",
  },
  {
    id: "#LX-98230",
    customer: "Marcus Reed",
    date: "Oct 24, 2023",
    amount: 890.00,
    paymentStatus: "Paid",
    fulfillment: "Shipped",
  },
  {
    id: "#LX-98229",
    customer: "Sophie Laurent",
    date: "Oct 23, 2023",
    amount: 4120.00,
    paymentStatus: "Paid",
    fulfillment: "Delivered",
  },
  {
    id: "#LX-98228",
    customer: "David Brooks",
    date: "Oct 23, 2023",
    amount: 320.00,
    paymentStatus: "Failed",
    fulfillment: "Cancelled",
  },
  {
    id: "#LX-98227",
    customer: "Alisha Miller",
    date: "Oct 22, 2023",
    amount: 1250.00,
    paymentStatus: "Paid",
    fulfillment: "Pending",
  },
  {
    id: "#LX-98226",
    customer: "James Harrison",
    date: "Oct 22, 2023",
    amount: 675.00,
    paymentStatus: "Paid",
    fulfillment: "Shipped",
  },
  {
    id: "#LX-98225",
    customer: "Emily Chen",
    date: "Oct 21, 2023",
    amount: 3420.00,
    paymentStatus: "Paid",
    fulfillment: "Delivered",
  },
  {
    id: "#LX-98224",
    customer: "Robert Foster",
    date: "Oct 21, 2023",
    amount: 189.00,
    paymentStatus: "Failed",
    fulfillment: "Cancelled",
  },
];

// Datos de métricas
const metrics = [
  {
    label: "TOTAL ORDERS",
    value: "1,284",
    change: "~12% from last month",
    icon: Package,
    color: "bg-[var(--black)]",
  },
  {
    label: "PENDING SHIPMENT",
    value: "42",
    change: "Priority handling required",
    icon: Truck,
    color: "bg-[var(--gold)]",
  },
  {
    label: "AVG. ORDER VALUE",
    value: "$1,420",
    change: "Premium segment",
    icon: DollarSign,
    color: "bg-[#1e293b]",
  },
  {
    label: "CANCELLATIONS",
    value: "0.8%",
    change: "Below market average",
    icon: XCircle,
    color: "bg-green-600",
  },
];

// Tabs de filtros
const tabs = [
  { id: "all", label: "All Orders" },
  { id: "pending", label: "Pending" },
  { id: "shipped", label: "Shipped" },
  { id: "delivered", label: "Delivered" },
];

// Colores de estado
const statusColors = {
  Paid: "bg-emerald-100 text-emerald-700",
  Failed: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-gray-100 text-gray-700",
};

export default function PedidosPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrado por tab y búsqueda
  const filteredOrders = ordersData.filter((order) => {
    const matchTab =
      activeTab === "all" ||
      (activeTab === "pending" && order.fulfillment === "Pending") ||
      (activeTab === "shipped" && order.fulfillment === "Shipped") ||
      (activeTab === "delivered" && order.fulfillment === "Delivered");

    const matchSearch = order.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchTab && matchSearch;
  });

  // Paginación
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Resetear página al cambiar filtros
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  // Función para generar números de página con puntos suspensivos
  const getPaginas = () => {
    const paginas = [];
    const total = totalPages;
    const current = currentPage;

    if (total <= 5) {
      for (let i = 1; i <= total; i++) paginas.push(i);
    } else {
      if (current <= 3) {
        paginas.push(1, 2, 3, 4, "...", total);
      } else if (current >= total - 2) {
        paginas.push(1, "...", total - 3, total - 2, total - 1, total);
      } else {
        paginas.push(1, "...", current - 1, current, current + 1, "...", total);
      }
    }
    return paginas;
  };

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[var(--off-white)] min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-montserrat font-light text-[var(--black)] tracking-tight">
                Gestión de Pedidos
              </h1>
              <p className="text-[var(--medium-gray)] font-opensans text-sm mt-1">
                Gestiona y rastrea las compras de tus clientes. Mantén los estándares de servicio de lujo con envíos oportunos.
              </p>
            </div>
          </div>

          {/* Métricas */}
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
                      <p className="text-xs font-opensans text-[var(--medium-gray)] mt-1">
                        {metric.change}
                      </p>
                    </div>
                    <div className={`p-2.5 rounded-lg ${metric.color} text-white shrink-0 ml-3`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card de pedidos */}
          <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] overflow-hidden">
            {/* Tabs y filtros */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 border-b border-[var(--lighter-gray)] gap-4">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-opensans font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-[var(--black)] text-white"
                        : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 border border-[var(--lighter-gray)] rounded-xl px-5 h-11 hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]">
                  <Filter size={16} />
                  Más Filtros
                </button>
                <button className="flex items-center gap-2 border border-[var(--lighter-gray)] rounded-xl px-5 h-11 hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]">
                  <Download size={16} />
                  Exportar CSV
                </button>
              </div>
            </div>

            {/* Barra de búsqueda */}
            <div className="px-6 py-4 border-b border-[var(--lighter-gray)]">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Buscar por pedido o cliente..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2.5 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Tabla de pedidos */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-opensans">
                <thead>
                  <tr className="text-left text-[var(--medium-gray)] bg-[var(--off-white)] border-b border-[var(--lighter-gray)]">
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      ID PEDIDO
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      CLIENTE
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      FECHA
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      MONTO
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      ESTADO DE PAGO
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                      CUMPLIMIENTO
                    </th>
                    <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider text-right">
                      ACCIONES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOrders.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center text-[var(--medium-gray)] font-opensans">
                        No se encontraron pedidos.
                      </td>
                    </tr>
                  ) : (
                    paginatedOrders.map((order, index) => (
                      <tr
                        key={order.id}
                        className={`border-b border-[var(--lighter-gray)] hover:bg-[var(--off-white)] transition ${
                          index === paginatedOrders.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-[var(--black)] font-medium">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 text-[var(--black)]">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 text-[var(--medium-gray)]">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 font-semibold text-[var(--black)]">
                          ${order.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-plusjakarta font-semibold uppercase ${statusColors[order.paymentStatus]}`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-plusjakarta font-semibold uppercase ${statusColors[order.fulfillment]}`}
                          >
                            {order.fulfillment}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              /* href={`/vendedor/pedidos/${order.id.replace("#", "")}`} */
                              href={`/dashboard/vendedor/pedidos/detalle/`}
                              className="p-1.5 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition"
                            >
                              <Eye className="h-4 w-4" />
                            </Link>
                            <button className="p-1.5 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition">
                              <MoreHorizontal className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            {filteredOrders.length > 0 && (
              <div className="px-6 py-4 border-t border-[var(--lighter-gray)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-sm font-opensans text-[var(--medium-gray)]">
                  Mostrando {startIndex + 1} a{" "}
                  {Math.min(startIndex + itemsPerPage, filteredOrders.length)} de{" "}
                  {filteredOrders.length} resultados
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {getPaginas().map((pag, idx) =>
                    pag === "..." ? (
                      <span key={`dots-${idx}`} className="px-2 text-[var(--medium-gray)]">
                        …
                      </span>
                    ) : (
                      <button
                        key={pag}
                        onClick={() => setCurrentPage(Number(pag))}
                        className={`px-3 py-1 rounded-lg text-sm font-opensans transition ${
                          currentPage === pag
                            ? "bg-[var(--gold)] text-white"
                            : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                        }`}
                      >
                        {pag}
                      </button>
                    )
                  )}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}