"use client";

import { paymentPeriodOptions, paymentStatusOptions } from "@/data/paymentHistory";

export function PaymentHistoryFilters({
  status,
  period,
  onStatusChange,
  onPeriodChange,
  onApply,
}) {
  return (
    <div className="bg-white rounded-xl border border-neutral/15 p-4 shadow-[0_4px_24px_-8px_rgba(27,38,50,0.06)]">
      <p className="font-label text-[9px] tracking-[0.14em] uppercase text-primary font-semibold mb-4">
        Filtrar Pagos
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="payment-status"
            className="font-label text-[8px] tracking-[0.1em] uppercase text-neutral mb-1.5 block"
          >
            Estado del Pago
          </label>
          <select
            id="payment-status"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full h-8 px-2.5 border border-neutral/20 rounded-lg font-body text-[11px] text-primary bg-white focus:outline-none focus:border-primary cursor-pointer"
          >
            {paymentStatusOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="payment-period"
            className="font-label text-[8px] tracking-[0.1em] uppercase text-neutral mb-1.5 block"
          >
            Período
          </label>
          <select
            id="payment-period"
            value={period}
            onChange={(e) => onPeriodChange(e.target.value)}
            className="w-full h-8 px-2.5 border border-neutral/20 rounded-lg font-body text-[11px] text-primary bg-white focus:outline-none focus:border-primary cursor-pointer"
          >
            {paymentPeriodOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={onApply}
          className="w-full h-8 rounded-lg bg-primary text-white font-label text-[9px] tracking-[0.14em] uppercase hover:bg-secondary transition-colors"
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}
