import Image from "next/image";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";

const statusStyles = {
  completado: "bg-neutral/10 text-neutral",
  pendiente: "bg-tertiary/20 text-primary",
  "en-proceso": "bg-primary/10 text-primary",
  fallido: "bg-red-50 text-red-600",
};

export function PaymentHistoryCard({ payment }) {
  const badgeClass = statusStyles[payment.status] ?? statusStyles.completado;

  return (
    <article className="bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.1)] p-4 md:p-5 flex flex-col sm:flex-row gap-4 md:gap-5">
      <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-lg bg-off-white">
        <Image
          src={payment.image}
          alt={payment.title}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <span
            className={`inline-flex px-2 py-0.5 rounded-full font-label text-[7px] tracking-[0.12em] uppercase ${badgeClass}`}
          >
            {payment.statusLabel}
          </span>
          <p className="font-headline text-lg md:text-xl font-bold text-primary">
            ${payment.amount.toLocaleString("es-ES", { minimumFractionDigits: 2 })}
          </p>
        </div>

        <h3 className="font-headline text-[14px] md:text-[15px] font-semibold text-primary leading-[1.25] mb-1.5">
          {payment.title}
        </h3>

        <p className="font-label text-[8px] tracking-[0.1em] uppercase text-neutral mb-1">
          Pedido {payment.orderNumber} · {payment.date}
        </p>

        <div className="flex items-center gap-1.5 mb-1">
          <CreditCard className="h-3 w-3 text-neutral shrink-0" strokeWidth={1.5} />
          <p className="font-body text-[10px] text-neutral">{payment.method}</p>
        </div>

        <p className="font-body text-[10px] text-neutral/80 mb-4">{payment.note}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <Button
            variant="inverted"
            size="sm"
            className="rounded-lg text-[8px] tracking-[0.12em] px-4"
          >
            {payment.primaryAction}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg border-neutral/25 text-[8px] tracking-[0.12em] px-4"
          >
            {payment.secondaryAction}
          </Button>
        </div>
      </div>
    </article>
  );
}
