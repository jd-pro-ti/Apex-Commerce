"use client";

import { useAuth } from "@/context/AuthContext";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { Container } from "@/components/ui/Container";
import { Package, Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function ClienteDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Pedidos", value: "12", icon: Package },
    { label: "Lista de Deseos", value: "8", icon: Heart },
    { label: "Carrito", value: "3 items", icon: ShoppingBag },
    { label: "Perfil", value: "Completo", icon: User },
  ];

  return (
    <>
      <NavbarCliente />
      <main className="pt-28 pb-12 bg-[#f5f5f0] min-h-screen">
        <Container>
          <div className="mb-8">
            <h1 className="text-3xl font-light">Mi Cuenta</h1>
            <p className="text-[#6b6b6b] font-light">
              Bienvenido, {user?.name} · Rol: {user?.role}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-light text-[#6b6b6b]">{stat.label}</span>
                    <Icon className="h-5 w-5 text-[#c9a84c]" />
                  </div>
                  <p className="text-2xl font-light">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-8 bg-white shadow-sm">
            <h2 className="text-xl font-light mb-4">Acceso Cliente</h2>
            <p className="text-[#6b6b6b] font-light">
              Esta es una vista de prueba para el rol de Cliente.
              Puedes ver tus pedidos, lista de deseos y gestionar tu perfil.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block px-3 py-1 bg-[#0a0a0a] text-white text-xs font-light tracking-[0.1em] uppercase">
                Cliente
              </span>
              <span className="inline-block px-3 py-1 bg-[#c9a84c] text-white text-xs font-light tracking-[0.1em] uppercase">
                Customer Access
              </span>
            </div>
          </div>

          {/* Botón para ir a la tienda pública */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-light text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
            >
              ← Volver a la tienda
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}