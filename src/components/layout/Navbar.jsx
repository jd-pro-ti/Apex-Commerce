"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, LogIn } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/store", label: "Tienda" },
    { href: "/categories", label: "Categorías" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d4d4d4]">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-light tracking-[0.3em] text-[#0a0a0a]">
              APEX<span className="font-normal text-[#c9a84c]">COMMERCE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-light tracking-[0.1em] uppercase text-[#2a2a2a] hover:text-[#0a0a0a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/auth/login" className="text-[#2a2a2a] hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 text-xs font-light tracking-[0.1em] uppercase">
              <LogIn className="h-4 w-4" />
              Iniciar sesión
            </Link>
            <Link href="/cart" className="text-[#2a2a2a] hover:text-[#0a0a0a] transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#c9a84c] text-white text-[9px] flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/profile" className="text-[#2a2a2a] hover:text-[#0a0a0a] transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0a0a0a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#d4d4d4] animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light tracking-[0.1em] uppercase text-[#2a2a2a] hover:text-[#0a0a0a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-light tracking-[0.1em] uppercase text-[#c9a84c] hover:text-[#b8973a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Iniciar sesión
              </Link>
              <div className="flex items-center space-x-6 pt-6 border-t border-[#d4d4d4]">
                <Link href="/cart" className="text-[#2a2a2a] hover:text-[#0a0a0a]">
                  <ShoppingBag className="h-5 w-5" />
                </Link>
                <Link href="/profile" className="text-[#2a2a2a] hover:text-[#0a0a0a]">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}