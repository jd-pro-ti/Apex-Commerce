import { Wallet } from "lucide-react";

function formatCurrency(value, compact = false) {
  if (compact && value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  return `$${value.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function ProfileStatsRow({ profile }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
      <article className="bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.1)] p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-label text-[9px] tracking-[0.14em] uppercase text-neutral mb-2">
              Saldo en Bóveda
            </p>
            <p className="font-headline text-[1.75rem] md:text-[2rem] font-bold text-primary leading-none">
              {formatCurrency(profile.vaultBalance)}
            </p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-off-white text-neutral/40">
            <Wallet className="h-5 w-5" strokeWidth={1.25} />
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 pt-4 border-t border-neutral/10">
          <p className="font-label text-[8px] tracking-[0.1em] uppercase">
            <span className="text-neutral">Cambio Diario </span>
            <span className="text-whatsapp font-semibold">+{profile.dailyChange}%</span>
          </p>
          <p className="font-label text-[8px] tracking-[0.1em] uppercase text-neutral">
            Estado de Liquidez{" "}
            <span className="text-primary font-semibold">{profile.liquidityStatus}</span>
          </p>
        </div>
      </article>

      <article className="bg-secondary rounded-xl shadow-[0_4px_24px_-8px_rgba(27,38,50,0.2)] p-5 md:p-6 text-white">
        <p className="font-label text-[9px] tracking-[0.14em] uppercase text-white/70 mb-2">
          Activos Totales Gestionados
        </p>
        <p className="font-headline text-[1.75rem] md:text-[2rem] font-bold leading-none mb-6">
          {formatCurrency(profile.totalAssetsManaged, true)}
        </p>

        <div className="space-y-4">
          {profile.assetBreakdown.map((asset) => (
            <div key={asset.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-label text-[8px] tracking-[0.1em] uppercase text-white/80">
                  {asset.label}
                </span>
                <span className="font-label text-[8px] tracking-[0.1em] uppercase text-tertiary">
                  {asset.percentage}%
                </span>
              </div>
              <div className="h-1 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-tertiary transition-all duration-500"
                  style={{ width: `${asset.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
