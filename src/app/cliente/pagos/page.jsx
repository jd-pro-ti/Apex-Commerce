"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Download, SlidersHorizontal } from "lucide-react";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { ClienteDashboardSidebar } from "@/components/cliente/ClienteDashboardSidebar";
import { PaymentHistoryFilters } from "@/components/cliente/PaymentHistoryFilters";
import { PaymentHistoryCard } from "@/components/cliente/PaymentHistoryCard";
import { paymentHistory as allPayments } from "@/data/paymentHistory";

const totalPages = 3;

export default function PagosPage() {
  const [status, setStatus] = useState("all");
  const [period, setPeriod] = useState("3m");
  const [appliedStatus, setAppliedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredPayments = useMemo(() => {
    if (appliedStatus === "all") return allPayments;
    return allPayments.filter((payment) => payment.status === appliedStatus);
  }, [appliedStatus]);

  const handleApplyFilters = () => {
    setAppliedStatus(status);
    setCurrentPage(1);
    setShowMobileFilters(false);
  };

  return (
    <>
      <NavbarCliente />

      <main className="w-[90%] max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6 pt-28 md:pt-[7.5rem] pb-14">
        <nav className="font-label text-[9px] tracking-[0.16em] uppercase text-neutral mb-6">
          <Link href="/dashboard/cliente" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-primary">Historial de Pagos</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className={`${showMobileFilters ? "block" : "hidden"} lg:block`}>
            <ClienteDashboardSidebar>
              <PaymentHistoryFilters
                status={status}
                period={period}
                onStatusChange={setStatus}
                onPeriodChange={setPeriod}
                onApply={handleApplyFilters}
              />
            </ClienteDashboardSidebar>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8">
              <div className="max-w-[480px]">
                <h1 className="font-headline text-[1.75rem] md:text-[2rem] font-bold text-primary leading-[1.15] mb-2">
                  Historial de Pagos
                </h1>
                <p className="font-body text-[12px] md:text-[13px] leading-[1.6] text-neutral">
                  Gestiona tus transacciones y descarga tus comprobantes de adquisiciones curadas.
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden inline-flex items-center gap-1.5 h-7 px-2.5 border border-neutral/20 rounded-md font-label text-[9px] tracking-[0.1em] uppercase text-primary"
                >
                  <SlidersHorizontal className="h-3 w-3" />
                  Filtros
                </button>

                <p className="font-label text-[9px] tracking-[0.14em] uppercase text-neutral">
                  Mostrando {filteredPayments.length} transacciones
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 font-label text-[8px] tracking-[0.12em] uppercase text-neutral hover:text-tertiary transition-colors"
                >
                  <Download className="h-3 w-3" />
                  Descargar Estado de Cuenta PDF
                </button>
              </div>
            </div>

            <div className="space-y-4 md:space-y-5">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <PaymentHistoryCard key={payment.id} payment={payment} />
                ))
              ) : (
                <div className="text-center py-16 px-6 bg-off-white rounded-xl">
                  <p className="font-headline text-lg font-semibold text-primary mb-2">
                    No hay pagos con este filtro
                  </p>
                  <p className="font-body text-[12px] text-neutral">
                    Ajusta los filtros para ver más transacciones.
                  </p>
                </div>
              )}
            </div>

            {filteredPayments.length > 0 && (
              <nav
                className="flex items-center justify-center gap-1 mt-10"
                aria-label="Paginación"
              >
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-7 px-2.5 items-center gap-1 rounded-full border border-neutral/20 font-label text-[8px] tracking-[0.08em] uppercase text-neutral hover:border-primary hover:text-primary transition-colors disabled:opacity-35"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-label text-[10px] transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-neutral/20 text-neutral hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-7 px-2.5 items-center gap-1 rounded-full border border-neutral/20 font-label text-[8px] tracking-[0.08em] uppercase text-neutral hover:border-primary hover:text-primary transition-colors disabled:opacity-35"
                >
                  Siguiente
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </nav>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
