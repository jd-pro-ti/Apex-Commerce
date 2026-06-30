import Link from "next/link";
import { Check, Star, Wine, Watch, Palette } from "lucide-react";

const acquisitionIcons = {
  watch: Watch,
  wine: Wine,
  art: Palette,
};

const statusStyles = {
  AUTENTICADO: "text-whatsapp",
  ALMACENADO: "text-tertiary",
  ENTREGADO: "text-neutral",
};

export function ProfileInfoRow({ profile }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-10 md:mb-12">
      <article className="lg:col-span-4 bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.1)] p-5 md:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary/20 text-tertiary">
            <Star className="h-4 w-4 fill-current" />
          </span>
          <div>
            <p className="font-headline text-sm font-semibold text-primary">{profile.tier}</p>
            <p className="font-label text-[8px] tracking-[0.1em] uppercase text-neutral">
              Desde {profile.memberSince}
            </p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {profile.membershipBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-tertiary shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="font-body text-[11px] leading-[1.5] text-neutral">{benefit}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="lg:col-span-8 bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.1)] p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="font-label text-[9px] tracking-[0.14em] uppercase text-primary font-semibold">
            Adquisiciones Recientes
          </h2>
          <Link
            href="/dashboard/cliente/pedidos"
            className="font-label text-[8px] tracking-[0.12em] uppercase text-neutral hover:text-tertiary transition-colors"
          >
            Ver Registro
          </Link>
        </div>

        <ul className="divide-y divide-neutral/10">
          {profile.recentAcquisitions.map((item) => {
            const Icon = acquisitionIcons[item.icon] ?? Watch;

            return (
              <li
                key={item.id}
                className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-off-white text-neutral">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-headline text-[13px] font-semibold text-primary truncate">
                    {item.name}
                  </p>
                </div>
                <p className="font-headline text-[12px] font-bold text-primary shrink-0 hidden sm:block">
                  ${item.price.toLocaleString("es-ES")}
                </p>
                <span
                  className={`font-label text-[7px] tracking-[0.12em] uppercase shrink-0 ${statusStyles[item.status] ?? "text-neutral"}`}
                >
                  {item.status}
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}
