"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Printer,
    MessageSquare,
} from "lucide-react";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";

// Datos mock idénticos a la imagen proporcionada, traducidos al español
const orderData = {
    id: "LX-78291",
    status: "Envío en Proceso",
    date: "24 de Oct, 2023, 10:42 AM",
    items: [
        {
            name: "Aethelgard Chronograph - Obsidian Edition",
            sku: "AG-OBS-2023-XL",
            quantity: 1,
            price: 4250.0,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&auto=format&fit=crop&q=60", // Reemplazar con tu asset local
        },
        {
            name: "Handcrafted Leather Travel Case",
            sku: "ACC-LTH-BRN",
            quantity: 1,
            price: 185.0,
            image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=150&auto=format&fit=crop&q=60", // Reemplazar con tu asset local
        },
    ],
    subtotal: 4435.0,
    shipping: 45.0,
    taxes: 354.8,
    total: 4834.8,
    customer: {
        name: "Alexander Blackwood",
        initials: "AB",
        memberSince: 2019,
        email: "a.blackwood@vanguard-corp.com",
        phone: "+1 (555) 012-8844",
    },
    payment: {
        method: "American Express Platinum",
        lastFour: "1004",
        expiry: "12/26",
        status: "AUTORIZADO Y VERIFICADO",
        transactionId: "TXN_998122045X_LX",
    },
    shippingDestination: {
        name: "Alexander Blackwood",
        company: "Vanguard Corp",
        department: "Oficinas Centrales",
        address: "742 Fifth Avenue, Piso 42",
        cityStateZip: "New York, NY 10019",
        country: "Estados Unidos",
    },
    timeline: [
        { event: "Pago Confirmado", time: "Oct 24, 10:45 AM", completed: true },
        { event: "Asignación Completada", time: "Oct 24, 11:20 AM", completed: true },
        { event: "Esperando Recolección de Logística", time: "En Cola", completed: false },
    ],
};

export default function DetallePedidoPage() {
    const [order] = useState(orderData);

    return (
        <>
            <NavbarVendedor />

            {/* pt-28 asegura el espacio suficiente debajo de la Navbar */}
            <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-12">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">

                    {/* Enlace superior Atrás */}
                    <div className="mb-4">
                        <Link
                            href="/dashboard/vendedor/pedidos"
                            className="flex items-center gap-1 text-xs font-semibold tracking-wider text-slate-500 uppercase hover:text-slate-800 transition"
                        >
                            <ArrowLeft className="h-3 w-3" /> Volver a pedidos
                        </Link>
                    </div>

                    {/* Encabezado Principal */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                                Pedido #{order.id}
                            </h1>
                            <div className="flex flex-wrap items-center gap-3 mt-2">
                                <span className="bg-[#e2e8f0] text-[#475569] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                                    {order.status}
                                </span>
                                <span className="text-slate-400 text-sm">
                                    Realizado el {order.date}
                                </span>
                            </div>
                        </div>

                        {/* Botones de acción superiores */}
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2.5 rounded-xl hover:bg-slate-50 transition text-sm font-medium text-slate-700 shadow-sm">
                                <Printer className="h-4 w-4" /> Imprimir Factura
                            </button>
                            <button className="flex items-center gap-2 bg-[#1e293b] text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition text-sm font-medium shadow-sm">
                                <span>Actualizar Estado de Envío</span>
                            </button>
                        </div>
                    </div>

                    {/* Grid de Distribución */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                        {/* COLUMNA IZQUIERDA (2/3 de ancho) - Productos y Pago */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Contenedor: Desglose del Pedido */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Desglose del Pedido</h2>

                                {/* Lista de productos */}
                                <div className="divide-y divide-slate-100">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between py-5 first:pt-0 last:pb-0">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-slate-900 text-sm">{item.name}</h4>
                                                    <p className="text-xs text-slate-400 mt-1 font-mono">
                                                        SKU: {item.sku} <span className="mx-1.5">•</span> Cantidad: {item.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="font-medium text-slate-900 text-sm">
                                                ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bloque de Totales */}
                                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Subtotal</span>
                                        <span className="text-slate-700">${order.subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Envío (Express Asegurado)</span>
                                        <span className="text-slate-700">${order.shipping.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-500">
                                        <span>Impuestos Estimados (IVA 8%)</span>
                                        <span className="text-slate-700">${order.taxes.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                        <span className="text-sm font-medium text-slate-500">Valor Total de Adquisición</span>
                                        <span className="text-2xl font-bold text-slate-900">
                                            ${order.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Contenedor: Método de Pago */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                                <h3 className="text-sm font-semibold text-slate-400 tracking-wide uppercase mb-4 flex items-center gap-2">
                                    Método de Pago
                                </h3>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-white p-2 rounded-lg border border-slate-200 font-bold text-xs text-blue-800 shadow-sm">
                                            AMEX
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{order.payment.method}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">
                                                Terminada en •••• {order.payment.lastFour} <span className="mx-1">•</span> Exp {order.payment.expiry}
                                            </p>
                                            <div className="flex items-center gap-1.5 mt-2">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                                <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase">
                                                    {order.payment.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                                        <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                            ID de Transacción
                                        </span>
                                        <span className="text-xs font-mono font-medium text-slate-700 block mt-0.5">
                                            {order.payment.transactionId}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* COLUMNA DERECHA (1/3 de ancho) - Perfil, Envío y Línea de tiempo */}
                        <div className="space-y-6">

                            {/* Tarjeta: Perfil del Cliente */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Perfil del Cliente
                                </span>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm flex items-center justify-center border border-blue-100">
                                        {order.customer.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm">{order.customer.name}</h4>
                                        <p className="text-xs text-slate-400">Miembro Élite desde {order.customer.memberSince}</p>
                                    </div>
                                </div>
                                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-50 pt-3 font-medium">
                                    <p className="truncate">✉️ {order.customer.email}</p>
                                    <p>📞 {order.customer.phone}</p>
                                </div>
                                <Link href="/dashboard/vendedor/mensajes" className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100/70 text-blue-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition">
                                    <MessageSquare className="h-3.5 w-3.5" />
                                    Enviar Mensaje al Cliente
                                </Link>
                            </div>

                            {/* Tarjeta: Destino de Envío */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                        Destino de Envío
                                    </span>
                                    <button className="text-xs font-semibold text-blue-600 hover:underline">Editar</button>
                                </div>
                                <div className="text-xs text-slate-600 space-y-1 leading-relaxed font-medium">
                                    <p className="font-semibold text-slate-900 text-sm">{order.shippingDestination.name}</p>
                                    <p>{order.shippingDestination.company}</p>
                                    <p>{order.shippingDestination.department}</p>
                                    <p>{order.shippingDestination.address}</p>
                                    <p>{order.shippingDestination.cityStateZip}</p>
                                    <p>{order.shippingDestination.country}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                                    <span>📍</span>
                                    <span>Distancia: Cumplimiento Local</span>
                                </div>
                            </div>

                            {/* Tarjeta: Historial de Actividad */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-5">
                                    Historial de Actividad
                                </span>
                                <div className="relative border-l-2 border-slate-100 ml-2.5 pl-5 space-y-6">
                                    {order.timeline.map((item, index) => (
                                        <div key={index} className="relative">
                                            {/* Indicador de línea de tiempo */}
                                            <span className={`absolute -left-[27px] top-0.5 h-3.5 w-3.5 rounded-full border-2 bg-white ${item.completed ? "border-blue-900 bg-blue-900" : "border-slate-300"
                                                }`} />
                                            <div>
                                                <h5 className="text-xs font-semibold text-slate-800">{item.event}</h5>
                                                <p className="text-[11px] text-slate-400 mt-0.5">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}