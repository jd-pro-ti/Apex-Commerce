"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Truck,
  Shield,
  Clock,
  Watch,
  Gem,
  Laptop,
  Sofa,
  Star,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {Navbar} from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "MAISON LUXE",
      description: "Bolso Tote de Cuero",
      price: "$2,800",
      originalPrice: "$3,366",
      category: "ACCESORIOS",
      image: "👜",
      badge: "Edición Limitada"
    },
    {
      id: 2,
      name: "CHRONOS ELITE",
      description: "Reloj Titanium Automatic",
      price: "$4,250",
      originalPrice: "$5,100",
      category: "RELojERÍA",
      image: "⌚",
      badge: "Colección Otoño"
    },
    {
      id: 3,
      name: "AURALLIS",
      description: "Auriculares Sonic Master",
      price: "$899",
      originalPrice: "$1,080",
      category: "AUDIO",
      image: "🎧",
      badge: "Nuevo"
    },
    {
      id: 4,
      name: "APEX MOBILE",
      description: "Prism 15 Pro",
      price: "$1,599",
      originalPrice: "$1,920",
      category: "TECNOLOGÍA",
      image: "📱",
      badge: "Top Ventas"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const product = products[currentSlide];

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="relative aspect-[4/3] bg-[#f5f5f0] flex items-center justify-center">
          <div className="text-8xl md:text-9xl transform -rotate-6">
            {product.image}
          </div>
          
          <div className="absolute top-6 left-6">
            <span className="inline-block px-4 py-1.5 bg-[#0a0a0a] text-white text-[10px] font-light tracking-[0.2em] uppercase">
              {product.badge}
            </span>
          </div>
          
          <div className="absolute bottom-6 right-6 flex items-center gap-3 text-sm font-light text-[#6b6b6b]">
            <span className="text-[#c9a84c]">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="w-8 h-px bg-[#d4d4d4]"></span>
            <span>{String(products.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-light tracking-[0.3em] text-[#c9a84c] uppercase">
              {product.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-light mt-2">
              {product.name}
            </h3>
            <p className="text-base text-[#4a4a4a] font-light mt-2">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-end gap-4">
            <span className="text-3xl font-light text-[#0a0a0a]">
              {product.price}
            </span>
            <span className="text-base font-light text-[#a8a8a8] line-through">
              {product.originalPrice}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="px-10">
              Comprar ahora
            </Button>
            <Button variant="outline" size="lg" className="px-10">
              Ver detalles
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 text-sm font-light text-[#6b6b6b] pt-6 border-t border-[#e8e6e3]">
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Envío gratis
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Garantía 2 años
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Entrega 24h
            </span>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 p-3 bg-white border border-[#e8e6e3] hover:bg-[#f5f5f0] transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 p-3 bg-white border border-[#e8e6e3] hover:bg-[#f5f5f0] transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center gap-3 mt-10">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? "w-10 h-px bg-[#c9a84c]" 
                : "w-8 h-px bg-[#d4d4d4] hover:bg-[#a8a8a8]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#f5f5f0] pt-24 md:pt-28">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna izquierda - Texto */}
          <div className="lg:col-span-5 pt-4 lg:pt-8">
            {/* Etiquetas */}
            <div className="flex flex-wrap gap-6 mb-8">
              <span className="text-xs font-light tracking-[0.3em] text-[#c9a84c] uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-[#c9a84c]"></span>
                CURIACIONES EXQUISITAS
              </span>
              <span className="text-xs font-light tracking-[0.3em] text-[#c9a84c] uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-[#c9a84c]"></span>
                COLECCIÓN OTOÑO
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-6">
              Eleva tu estilo de vida con<br />
              <span className="text-[#c9a84c]">lujo atemporal</span>
            </h1>

            {/* Descripción */}
            <p className="text-base md:text-lg text-[#4a4a4a] font-light max-w-md mb-8 leading-relaxed">
              Descubre una selección de prendas de diseñadores de renombre mundial,
              electrónica de alta gama y moda a medida.
            </p>

            {/* Búsqueda */}
            <div className="max-w-md mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Busca diseñadores, marcas o artículo:"
                    className="h-12 text-sm border-[#d4d4d4] rounded-none bg-white placeholder:text-[#a8a8a8] focus:border-[#c9a84c] px-4"
                  />
                </div>
                <Button variant="primary" size="default" className="h-12 px-6">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="flex flex-wrap gap-8 text-xs font-light uppercase tracking-[0.1em]">
              <Link href="/store" className="text-[#2a2a2a] hover:text-[#c9a84c] transition-colors group flex items-center">
                Colección
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="text-[#2a2a2a] hover:text-[#c9a84c] transition-colors group flex items-center">
                Nuestra historia
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Columna derecha - Carrusel */}
          <div className="lg:col-span-7">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE: CATEGORÍAS
// ============================================
function CategoriesSection() {
  const categories = [
    {
      name: "Moda",
      description: "Alta costura vanguardista y clásicos atemporales.",
      icon: "👗",
      color: "#f5f0eb"
    },
    {
      name: "Tecnología de alta gama",
      description: "Rendimiento diseñado con precisión.",
      icon: "💻",
      color: "#ebf0f5"
    },
    {
      name: "Hogar",
      description: "Diseño y objetos únicos para tu espacio.",
      icon: "🏠",
      color: "#f0f5eb"
    },
    {
      name: "Diseñadores",
      description: "Creadores visionarios y marcas icónicas.",
      icon: "✧",
      color: "#f5ebf0"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Mundos <span className="text-[#c9a84c]">seleccionados</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-[#4a4a4a] font-light mt-4 text-lg">
            Descubre nuestras categorías, cuidadosamente seleccionadas para quienes
            saben apreciar las cosas buenas de la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative p-10 transition-all duration-500 hover-lift"
              style={{ backgroundColor: category.color }}
            >
              <div className="relative z-10">
                <div className="text-6xl mb-6">{category.icon}</div>
                <h3 className="text-2xl font-light mb-3">{category.name}</h3>
                <p className="text-sm text-[#4a4a4a] font-light mb-6 leading-relaxed">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-xs font-light tracking-[0.15em] uppercase text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors">
                  Explorar
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function SeasonalSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f5f0]">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-xs font-light tracking-[0.3em] text-[#c9a84c] uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-[#c9a84c]"></span>
                SELECCIÓN DE TEMPORADA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Ya está aquí la <span className="text-[#c9a84c]">colección de otoño</span>
            </h2>
            <p className="text-lg text-[#4a4a4a] font-light max-w-lg mb-8 leading-relaxed">
              Disfruta de la calidez de esta época del año con nuestra exclusiva serie Terracotta.
              Piezas de edición limitada creadas para el conocedor moderno.
            </p>
            <Button variant="primary" size="lg" className="group px-10">
              Descubre más
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-[#ebf0f5] flex items-center justify-center text-8xl">
              🍂
            </div>
            <div className="aspect-square bg-[#f0ebf5] flex items-center justify-center text-8xl">
              🧥
            </div>
            <div className="aspect-square bg-[#f5ebeb] flex items-center justify-center text-8xl">
              👢
            </div>
            <div className="aspect-square bg-[#ebf5f0] flex items-center justify-center text-8xl">
              🧣
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedIcons() {
  const products = [
    {
      name: "CHRONOS ELITE",
      description: "Reloj Titanium Automatic",
      price: "$4,250",
      icon: Watch,
      category: "Relojería"
    },
    {
      name: "MAISON LUXE",
      description: "Bolso Tote de Cuero",
      price: "$2,800",
      icon: Gem,
      category: "Accesorios"
    },
    {
      name: "AURALLIS",
      description: "Auriculares Sonic Master",
      price: "$899",
      icon: Laptop,
      category: "Audio"
    },
    {
      name: "APEX MOBILE",
      description: "Prism 15 Pro",
      price: "$1,599",
      icon: Sofa,
      category: "Tecnología"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Iconos <span className="text-[#c9a84c]">destacados</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-[#4a4a4a] font-light mt-4 text-lg">
            Las piezas más codiciadas de nuestra colección, seleccionadas por su excepcional
            artesanía y su estilo atemporal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group p-10 bg-[#fafaf8] hover:bg-[#f5f5f0] transition-all duration-500 hover-lift border border-[#f0f0eb]"
              >
                <div className="mb-6">
                  <IconComponent className="h-16 w-16 text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors" />
                </div>
                <div className="text-xs font-light tracking-[0.15em] uppercase text-[#c9a84c] mb-1">
                  {product.category}
                </div>
                <h4 className="text-lg font-light mb-1">{product.name}</h4>
                <p className="text-sm font-light text-[#6b6b6b] mb-3">
                  {product.description}
                </p>
                <p className="text-xl font-light text-[#0a0a0a]">
                  {product.price}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <span className="w-12 h-px bg-[#c9a84c]"></span>
            <span className="text-xs font-light tracking-[0.3em] text-[#c9a84c] uppercase">
              RECONOCIDO A NIVEL MUNDIAL
            </span>
            <span className="w-12 h-px bg-[#c9a84c]"></span>
          </div>
          <div className="flex justify-center gap-8 mt-6 text-sm font-light text-[#6b6b6b]">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#c9a84c]" />
              4.9/5 Estrellas
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-[#c9a84c]" />
              Premium Selection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafaf8] border-y border-[#e8e6e3]">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            La experiencia de <span className="text-[#c9a84c]">lujo</span>
          </h2>
          
          <div className="mb-6">
            <span className="text-7xl font-light text-[#c9a84c] leading-none">"</span>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-light text-[#2a2a2a] leading-relaxed mb-8">
            La selección de productos de Apex Commerce no tiene parangón. Encontré una pieza
            vintage de diseño que llevaba años buscando. El servicio de atención al cliente
            hizo que el envío internacional fuera muy sencillo y seguro.
          </blockquote>
          
          <div>
            <p className="text-base font-light text-[#0a0a0a]">Helena von Strauss</p>
            <p className="text-sm font-light text-[#6b6b6b]">Art Collector, Berlin</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <SeasonalSection />
      <FeaturedIcons />
      <TestimonialSection />
      <Footer />
    </main>
  );
}