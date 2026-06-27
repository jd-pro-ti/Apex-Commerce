"use client"; //ErandyLuz

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, LogOut, User, ShoppingBag, Heart, Package, Settings } from "lucide-react";

export function NavbarCliente() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();

  const navLinks = [
    { href: "/dashboard/cliente", label: "Dashboard", icon: User },
    { href: "/dashboard/cliente/pedidos", label: "Mis Pedidos", icon: Package },
    { href: "/cliente/wishlist", label: "Lista de Deseos", icon: Heart },
    { href: "/cliente/carrito", label: "Carrito", icon: ShoppingBag },
    { href: "/cliente/perfil", label: "Perfil", icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e6e3]">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/cliente" className="flex items-center shrink-0">
            <span className="text-xl md:text-2xl font-light tracking-[0.3em] text-[#0a0a0a]">
              APEX<span className="font-normal text-[#c9a84c]">COMMERCE</span>
            </span>
            <span className="ml-3 px-3 py-1 bg-[#c9a84c] text-white text-[10px] font-medium tracking-[0.1em] uppercase">
              Cliente
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-xs font-light tracking-[0.1em] uppercase text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={logout}
              className="flex items-center gap-2 text-xs font-light tracking-[0.1em] uppercase text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0a0a0a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#e8e6e3]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 text-sm font-light text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
              <button
                onClick={logout}
                className="flex items-center gap-3 text-sm font-light text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors pt-4 border-t border-[#e8e6e3]"
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