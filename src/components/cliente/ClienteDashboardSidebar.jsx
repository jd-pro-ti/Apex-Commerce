"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Heart,
  CreditCard,
  User,
} from "lucide-react";

const dashboardLinks = [
  { href: "/dashboard/cliente", label: "Resumen", icon: LayoutDashboard },
  { href: "/dashboard/cliente/pedidos", label: "Mis Pedidos", icon: Package },
  { href: "/cliente/wishlist", label: "Lista de Deseos", icon: Heart },
  { href: "/cliente/pagos", label: "Historial de Pagos", icon: CreditCard },
  { href: "/cliente/perfil", label: "Mi Perfil", icon: User },
];

export function ClienteDashboardSidebar({ children }) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-[220px] shrink-0">
      <p className="font-label text-[8px] tracking-[0.16em] uppercase text-neutral mb-3">
        Panel
      </p>

      <nav className="space-y-0.5 mb-6">
        {dashboardLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg font-label text-[10px] tracking-[0.06em] uppercase transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-neutral hover:text-primary hover:bg-off-white"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r bg-tertiary" />
              )}
              <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {children}
    </aside>
  );
}
