"use client";

import { useAuth } from "@/context/AuthContext";
import { NavbarCliente } from "@/components/layout/NavbarCliente";
import { Container } from "@/components/ui/Container";
import { Package, Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function ClienteDashboard() {
  const { user, mounted } = useAuth();

  const stats = [
    { label: "Pedidos", value: "12", icon: Package },
    { label: "Lista de Deseos", value: "8", icon: Heart },
    { label: "Carrito", value: "3 items", icon: ShoppingBag },
    { label: "Perfil", value: "Completo", icon: User },
  ];

  return (
    <>
      <NavbarCliente />
      <main className="pt-28 pb-12 bg-off-white min-h-screen">
        <Container>
          <div className="mb-8">
            <h1 className="font-headline text-3xl font-semibold text-primary">Mi Cuenta</h1>
            <p className="text-neutral font-body">
              Bienvenido, {mounted ? (user?.name ?? "Usuario") : "Usuario"} · Rol:{" "}
              {mounted ? (user?.role ?? "cliente") : "cliente"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label text-sm text-neutral">{stat.label}</span>
                    <Icon className="h-5 w-5 text-tertiary" />
                  </div>
                  <p className="font-headline text-2xl font-semibold text-primary">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-8 bg-white shadow-sm">
            <h2 className="font-headline text-xl font-semibold text-primary mb-4">Acceso Cliente</h2>
            <p className="text-neutral font-body">
              Esta es una vista de prueba para el rol de Cliente.
              Puedes ver tus pedidos, lista de deseos y gestionar tu perfil.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block px-3 py-1 bg-whatsapp text-white font-label text-xs tracking-[0.1em] uppercase">
                Cliente
              </span>
              <span className="inline-block px-3 py-1 bg-tertiary text-secondary font-label text-xs tracking-[0.1em] uppercase">
                Customer Access
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center font-body text-sm text-neutral hover:text-primary transition-colors"
            >
              ← Volver a la tienda
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
}
