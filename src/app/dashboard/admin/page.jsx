"use client";

import { useAuth } from "@/context/AuthContext";
import { NavbarAdmin } from "@/components/layout/NavbarAdmin";
import { Container } from "@/components/ui/Container";
import { Shield, Users, ShoppingBag, Tag, BarChart3, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Usuarios", value: "1,284", icon: Users },
    { label: "Productos", value: "3,847", icon: ShoppingBag },
    { label: "Pedidos", value: "892", icon: Tag },
    { label: "Ingresos", value: "$284,500", icon: BarChart3 },
  ];

  return (
    <>
      <NavbarAdmin />
      <main className="pt-28 pb-12 bg-[#f5f5f0] min-h-screen">
        <Container>
          <div className="mb-8">
            <h1 className="text-3xl font-light">Panel de Administración</h1>
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
            <h2 className="text-xl font-light mb-4">Acceso Administrador</h2>
            <p className="text-[#6b6b6b] font-light">
              Esta es una vista de prueba para el rol de Administrador.
              Tienes acceso a todas las funcionalidades del sistema.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block px-3 py-1 bg-[#0a0a0a] text-white text-xs font-light tracking-[0.1em] uppercase">
                Admin
              </span>
              <span className="inline-block px-3 py-1 bg-[#c9a84c] text-white text-xs font-light tracking-[0.1em] uppercase">
                Full Access
              </span>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}