"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  Menu,
  X,
  LogOut,
  ChevronDown,
  LayoutGrid,
  Package,
  Heart,
  User,
  CreditCard,
} from "lucide-react";

export function NavbarCliente() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, mounted } = useAuth();

  const navLinks = [
<<<<<<< HEAD
    { href: "/cliente/catalogo", label: "Catálogo", icon: LayoutGrid },
    { href: "/cliente/producto", label: "Detalle de Producto (Modal)", icon: Package },
    { href: "/cliente/wishlist", label: "Lista de Deseos", icon: Heart },
    { href: "/cliente/perfil", label: "Mi Perfil", icon: User },
    { href: "/cliente/pagos", label: "Historial de Pagos", icon: CreditCard },
  ];
=======
  { href: "/dashboard/cliente", label: "Dashboard", icon: User },
  { href: "/dashboard/cliente/pedidos", label: "Mis Pedidos", icon: Package },
  { href: "/dashboard/cliente/wishlist", label: "Lista de Deseos", icon: Heart },
  { href: "/dashboard/cliente/carrito", label: "carrito", icon: ShoppingBag },
  { href: "/dashboard/cliente/perfil", label: "Perfil", icon: Settings },
];
>>>>>>> e2f34acb4a48da854f1a366520ebb26a5f5ab8c1

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral/20">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
<<<<<<< HEAD
          <Link href="/dashboard/cliente" className="flex items-center shrink-0">
            <span className="font-headline text-xl md:text-2xl font-semibold tracking-[0.2em] text-primary">
              APEX<span className="text-tertiary">COMMERCE</span>
=======
          {/* Logo */}
          <Link href="/dashboard/cliente" className="flex items-center shrink-0">
            <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-[#0a0a0a]">
              APEX<span className="font-normal text-[#c9a84c]">COMMERCE</span>
>>>>>>> e2f34acb4a48da854f1a366520ebb26a5f5ab8c1
            </span>
            <span className="ml-3 px-3 py-1 bg-whatsapp text-white text-[10px] font-label tracking-[0.1em] uppercase rounded-tl-lg">
              Cliente
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 font-label text-xs tracking-[0.08em] uppercase text-neutral hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={logout}
              className="flex items-center gap-2 font-label text-xs tracking-[0.08em] uppercase text-neutral hover:text-primary transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </button>
          </div>

          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden -mx-4 md:-mx-8 bg-whatsapp rounded-tl-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10">
              <button
                type="button"
                className="flex w-full items-center justify-between font-headline text-white font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{mounted ? (user?.name ?? "Usuario") : "Usuario"}: Cliente</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-3 font-body text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={logout}
                className="flex items-center gap-3 px-5 py-3 font-body text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors mt-2 border-t border-white/10"
              >
                <LogOut className="h-4 w-4" />
                Cerrar sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
