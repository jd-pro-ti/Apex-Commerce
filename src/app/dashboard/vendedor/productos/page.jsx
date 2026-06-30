"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Download,
    Plus,
    Filter,
    ArrowUpDown,
    MoreVertical,
    Edit,
    Trash2,
    Search,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";
import { Container } from "@/components/ui/Container";

// Datos mock de productos
const productsData = [
    {
        id: 1,
        name: "Aurelia Emerald Tote",
        subtitle: "ITALIAN LEATHER SERIES",
        sku: "LX-88621",
        category: "Accessories",
        price: 1250.0,
        stock: 42,
        status: "ACTIVE",
        image: "https://picsum.photos/seed/bag/60/60",
    },
    {
        id: 2,
        name: "Chronos Obsidian S1",
        subtitle: "TIMEPIECE COLLECTION",
        sku: "LX-92144",
        category: "Watches",
        price: 3400.0,
        stock: 12,
        status: "LOW STOCK",
        image: "https://picsum.photos/seed/watch3/60/60",
    },
    {
        id: 3,
        name: "Scarlet Runner Pro",
        subtitle: "ATHLEISURE GEAR",
        sku: "LX-11059",
        category: "Footwear",
        price: 450.0,
        stock: 0,
        status: "OUT OF STOCK",
        image: "https://picsum.photos/seed/shoe2/60/60",
    },
    {
        id: 4,
        name: "Cashmere Lounge Set",
        subtitle: "ESSENTIALS COLLECTION",
        sku: "LX-33980",
        category: "Apparel",
        price: 890.0,
        stock: 18,
        status: "ACTIVE",
        image: "https://picsum.photos/seed/clothes/60/60",
    },
    {
        id: 5,
        name: "Onyx Cufflinks",
        subtitle: "JEWELRY COLLECTION",
        sku: "LX-44521",
        category: "Jewelry",
        price: 180.0,
        stock: 25,
        status: "ACTIVE",
        image: "https://picsum.photos/seed/cufflinks2/60/60",
    },
    {
        id: 6,
        name: "Sienna Leather Tote",
        subtitle: "ITALIAN LEATHER SERIES",
        sku: "LX-77213",
        category: "Accessories",
        price: 890.0,
        stock: 8,
        status: "LOW STOCK",
        image: "https://picsum.photos/seed/tote3/60/60",
    },
];

// Tabs
const tabs = [
    { id: "all", label: "Todos los productos", count: 124 },
    { id: "active", label: "Activos", count: 102 },
    { id: "draft", label: "Eliminados", count: 14 },
    { id: "stock", label: "Sin stock", count: 8 },
];

// Colores de estado
const statusColors = {
    ACTIVE: "bg-emerald-100 text-emerald-700",
    "LOW STOCK": "bg-yellow-100 text-yellow-700",
    "OUT OF STOCK": "bg-red-100 text-red-700",
    DRAFT: "bg-gray-100 text-gray-700",
};

export default function ProductosPage() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Filtrado por tab y búsqueda
    const filteredProducts = productsData.filter((product) => {
        const matchTab =
            activeTab === "all" ||
            (activeTab === "active" && product.status === "ACTIVE") ||
            (activeTab === "draft" && product.status === "DRAFT") ||
            (activeTab === "stock" && product.status === "OUT OF STOCK");

        const matchSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchTab && matchSearch;
    });

    // Paginación
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Resetear página al cambiar filtros
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCurrentPage(1);
    };

    return (
        <>
            <NavbarVendedor />

            <main className="pt-28 pb-10 bg-[var(--off-white)] min-h-screen">
                <Container>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-montserrat font-light text-[var(--black)] tracking-tight">
                                Gestión de productos
                            </h1>
                            <p className="text-[var(--medium-gray)] font-opensans text-sm mt-1">
                                Administra tu catálogo de productos de lujo y los niveles de inventario.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
                            <button className="flex items-center gap-2 border border-[var(--lighter-gray)] rounded-xl px-5 h-11 bg-[var(--white)] hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]">
                                <Download size={18} />
                                Exportar CSV
                            </button>

                            <Link
                                href="/dashboard/vendedor/productos/nuevo"
                                className="flex items-center gap-2 bg-[var(--white)] text-white px-6 h-11 rounded-xl hover:bg-[var(--black-light)] transition font-opensans text-sm"
                            >
                                <Plus size={18} />
                                Añadir producto
                            </Link>
                        </div>
                    </div>

                    {/* Card principal */}
                    <div className="bg-[var(--white)] rounded-3xl shadow-sm border border-[var(--lighter-gray)] overflow-hidden">
                        {/* Tabs y filtros */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 border-b border-[var(--lighter-gray)] gap-4">
                            <div className="flex flex-wrap gap-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-opensans font-medium transition-all ${activeTab === tab.id
                                            ? "bg-[var(--black)] text-white"
                                            : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                                            }`}
                                    >
                                        {tab.label}
                                        <span
                                            className={`text-xs font-plusjakarta ${activeTab === tab.id
                                                ? "text-white/70"
                                                : "text-[var(--medium-gray)]"
                                                }`}
                                        >
                                            ({tab.count})
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button className="border border-[var(--lighter-gray)] rounded-xl px-5 h-11 flex items-center gap-2 hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]">
                                    <Filter size={16} />
                                    Categoria
                                </button>

                                <button className="border border-[var(--lighter-gray)] rounded-xl px-5 h-11 flex items-center gap-2 hover:bg-[var(--off-white)] transition font-opensans text-sm text-[var(--black)]">
                                    <ArrowUpDown size={16} />
                                    Ordenar
                                </button>
                            </div>
                        </div>

                        {/* Barra de búsqueda */}
                        <div className="px-6 py-4 border-b border-[var(--lighter-gray)]">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--medium-gray)]" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full pl-9 pr-4 py-2 bg-[var(--off-white)] border border-[var(--lighter-gray)] rounded-lg text-sm font-opensans text-[var(--black)] placeholder-[var(--medium-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Tabla de productos */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm font-opensans">
                                <thead>
                                    <tr className="text-left text-[var(--medium-gray)] bg-[var(--off-white)] border-b border-[var(--lighter-gray)]">
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            PRODUCT
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            SKU
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            CATEGORY
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            PRICE
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            STOCK
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider">
                                            STATUS
                                        </th>
                                        <th className="px-6 py-4 font-medium text-xs uppercase tracking-wider text-right">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedProducts.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="px-6 py-12 text-center text-[var(--medium-gray)] font-opensans"
                                            >
                                                No products found matching your criteria.
                                            </td>
                                        </tr>
                                    ) : (
                                        paginatedProducts.map((product) => (
                                            <tr
                                                key={product.id}
                                                className="border-b border-[var(--lighter-gray)] hover:bg-[var(--off-white)] transition"
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-10 h-10 rounded-lg object-cover border border-[var(--lighter-gray)] flex-shrink-0"
                                                        />
                                                        <div>
                                                            <p className="text-[var(--black)] font-medium">
                                                                {product.name}
                                                            </p>
                                                            <p className="text-xs text-[var(--medium-gray)] uppercase tracking-wider">
                                                                {product.subtitle}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[var(--medium-gray)] font-mono text-xs">
                                                    {product.sku}
                                                </td>
                                                <td className="px-6 py-4 text-[var(--medium-gray)]">
                                                    {product.category}
                                                </td>
                                                <td className="px-6 py-4 font-semibold text-[var(--black)]">
                                                    ${product.price.toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 text-[var(--black)]">
                                                    {product.stock}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`px-2.5 py-1 rounded-full text-xs font-plusjakarta font-semibold uppercase ${statusColors[product.status]}`}
                                                    >
                                                        {product.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Link
                                                            /* href={`/dashboard/vendedor/productos/editar/${product.id}`} */
                                                            href={`/dashboard/vendedor/productos/editar/`}
                                                            className="p-1.5 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition"
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Link>
                                                        <button className="p-1.5 text-[var(--medium-gray)] hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                        <button className="p-1.5 text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] rounded-lg transition">
                                                            <MoreVertical className="h-4 w-4" />
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
                        {filteredProducts.length > 0 && (
                            <div className="px-6 py-4 border-t border-[var(--lighter-gray)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <span className="text-sm font-opensans text-[var(--medium-gray)]">
                                    Showing {startIndex + 1} to{" "}
                                    {Math.min(startIndex + itemsPerPage, filteredProducts.length)}{" "}
                                    of {filteredProducts.length} results
                                </span>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)] disabled:opacity-50 disabled:cursor-not-allowed transition"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`px-3 py-1 rounded-lg text-sm font-opensans transition ${currentPage === pageNum
                                                    ? "bg-[var(--gold)] text-white"
                                                    : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                    {totalPages > 5 && currentPage < totalPages - 2 && (
                                        <>
                                            <span className="text-[var(--medium-gray)]">...</span>
                                            <button
                                                onClick={() => setCurrentPage(totalPages)}
                                                className={`px-3 py-1 rounded-lg text-sm font-opensans transition ${currentPage === totalPages
                                                    ? "bg-[var(--gold)] text-white"
                                                    : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--off-white)]"
                                                    }`}
                                            >
                                                {totalPages}
                                            </button>
                                        </>
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
                </Container>
            </main>
        </>
    );
}