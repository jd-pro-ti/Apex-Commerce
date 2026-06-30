"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { User, Shield, Store, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = (role) => {
    login(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f0]">
      <Container>
        <div className="max-w-md mx-auto bg-white p-12 shadow-sm">
          {/* Logo */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-light tracking-[0.3em] text-[#0a0a0a]">
              APEX<span className="font-normal text-[#c9a84c]">COMMERCE</span>
            </h1>
            <div className="divider-gold-center mt-4" />
            <p className="text-sm font-light text-[#6b6b6b] mt-4">
              Accede a tu cuenta de lujo
            </p>
          </div>

          {/* Campos de login simulados */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-xs font-light tracking-[0.1em] uppercase text-[#6b6b6b] mb-2">
                Correo electrónico
              </label>
              <Input
                type="email"
                placeholder="tu@email.com"
                className="w-full border-[#d4d4d4] rounded-none bg-[#fafaf8] px-4 py-3"
                defaultValue="admin@apexcommerce.com"
              />
            </div>
            <div>
              <label className="block text-xs font-light tracking-[0.1em] uppercase text-[#6b6b6b] mb-2">
                Contraseña
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="w-full border-[#d4d4d4] rounded-none bg-[#fafaf8] px-4 py-3"
                defaultValue="password123"
              />
            </div>
          </div>

          {/* Botones de roles */}
          <div className="space-y-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center group"
              onClick={() => handleLogin("admin")}
            >
              <Shield className="h-4 w-4 mr-2" />
              Iniciar como Admin
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full justify-center group"
              onClick={() => handleLogin("vendedor")}
            >
              <Store className="h-4 w-4 mr-2" />
              Iniciar como Vendedor
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="w-full justify-center group border border-[#d4d4d4]"
              onClick={() => handleLogin("cliente")}
            >
              <User className="h-4 w-4 mr-2" />
              Iniciar como Cliente
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="w-full justify-center group border border-[#d4d4d4]"
              onClick={() => handleLogin("/")}
            >
              <User className="h-4 w-4 mr-2" />
              salir
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-light text-[#a8a8a8]">
              Simulación de login · Sin autenticación real
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}