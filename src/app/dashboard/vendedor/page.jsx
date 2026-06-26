"use client";

import { useAuth } from "@/context/AuthContext";
import { NavbarVendedor } from "@/components/layout/NavbarVendedor";
import { Container } from "@/components/ui/Container";
import { Package, ShoppingBag, TrendingUp, Store } from "lucide-react";

export default function VendedorDashboard() {

  return (
    <>
      <NavbarVendedor />
      <main className="pt-28 pb-12 bg-[#f5f5f0] min-h-screen">
       <h1 className="text-black">Panel de Vendedor hola</h1>
      </main>
    </>
  );
}