"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart3,
  Store,
  Search,
  Bell,
  ChevronDown,
  User,
} from "lucide-react";

export function NavbarVendedor() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard/vendedor", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/vendedor/productos", label: "Productos", icon: Package },
    { href: "/dashboard/vendedor/pedidos", label: "Pedidos", icon: ShoppingBag },
    { href: "/dashboard/vendedor/analiticas", label: "Analíticas", icon: BarChart3 },
    { href: "/dashboard/vendedor/configuracion", label: "Configuración", icon: Store },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/dashboard/vendedor" className="flex items-center gap-3 shrink-0">
            <img src="/LogoApex.jpeg" alt="Apex" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="text-xl font-montserrat font-light tracking-wide text-[#2C3B4D]">
                APEX<span className="font-bold text-[#FFB162]">COMMERCE</span>
              </span>
              <span className="block text-[10px] font-plusjakarta font-medium text-[#777777] tracking-wider uppercase">
                Vendedor
              </span>
            </div>
          </Link>

          {/* Enlaces de navegación */}
          <div className="hidden lg:flex items-center gap-1 ml-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-opensans font-medium transition-all rounded-lg ${isActive
                      ? "bg-[#2C3B4D] text-white shadow-md"
                      : "text-[#1B2632] hover:bg-[#f0f2f5] hover:text-[#2C3B4D]"
                    }`}
                >
                  <link.icon className="h-4 w-4 text-current" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Buscador */}
          <div className="hidden md:block flex-1 max-w-3xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos, pedidos..."
                className="w-full bg-gray-50 text-[#1B2632] text-base placeholder-[#777777] rounded-full px-5 py-3 pl-12 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB162] focus:border-transparent transition"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#777777]" />
            </div>
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Notificaciones */}
            <button className="relative p-2 rounded-full text-[#777777] hover:text-[#2C3B4D] hover:bg-gray-100 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-[#FFB162] text-white text-[10px] font-plusjakarta font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                13
              </span>
            </button>

            {/* Perfil */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-[#2C3B4D] flex items-center justify-center text-white font-plusjakarta font-semibold text-sm">
                  DA
                </div>
                <span className="hidden lg:block text-sm font-opensans font-medium text-[#1B2632]">
                  Diego
                </span>
                <ChevronDown className="hidden lg:block h-4 w-4 text-[#777777]" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <Link
                    href="/dashboard/vendedor/perfil"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-[#1B2632] hover:bg-gray-50 transition-colors"
                  >
                    <User className="h-4 w-4" />
                    Mi Perfil
                  </Link>
                  <Link
                    href="/dashboard/vendedor/configuracion"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-[#1B2632] hover:bg-gray-50 transition-colors"
                  >
                    <Store className="h-4 w-4" />
                    Configuración Tienda
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full">
                    <LogOut className="h-4 w-4" />
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>

            {/* Menú móvil */}
            <button
              className="lg:hidden text-[#1B2632] hover:text-[#2C3B4D] p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg text-base font-opensans font-medium ${isActive
                      ? "bg-[#2C3B4D] text-white"
                      : "text-[#1B2632] hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
            <hr className="my-2 border-gray-200" />
            <button className="flex items-center gap-4 px-4 py-3 w-full text-base font-opensans font-medium text-red-600 hover:bg-red-50 rounded-lg">
              <LogOut className="h-5 w-5" />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}