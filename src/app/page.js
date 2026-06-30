"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  Clock,
  Watch,
  Gem,
  Laptop,
  Sofa,
  Star,
  Award,
  Heart
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ============================================
// COMPONENTE: CARRUSEL DE PRODUCTOS
// ============================================
function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "MAISON LUXE",
      description: "Bolso Tote de Cuero Artesanal",
      price: "$2,800",
      originalPrice: "$3,366",
      discount: "15% OFF",
      category: "ACCESORIOS",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      badge: "Edición Limitada",
      badgeColor: "bg-[#2C3B4D]",
      rating: 4.9,
      reviews: 128
    },
    {
      id: 2,
      name: "CHRONOS ELITE",
      description: "Reloj Titanium Automatic",
      price: "$4,250",
      originalPrice: "$5,100",
      discount: "17% OFF",
      category: "RELOJERÍA",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      badge: "Colección Otoño",
      badgeColor: "bg-[#FFB162] text-[#1B2632]",
      rating: 4.8,
      reviews: 94
    },
    {
      id: 3,
      name: "AURALLIS PRO",
      description: "Auriculares Sonic Master Edition",
      price: "$899",
      originalPrice: "$1,080",
      discount: "17% OFF",
      category: "AUDIO",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
      badge: "Nuevo",
      badgeColor: "bg-[#2C3B4D]",
      rating: 4.7,
      reviews: 203
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const product = products[currentSlide];

  return (
    <div 
      className="relative animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#1B2632]/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen con efectos */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b131d]/40 via-transparent to-transparent z-10" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <span className={`px-4 py-1.5 ${product.badgeColor} text-[10px] font-semibold tracking-widest uppercase rounded-full shadow-md`}>
                {product.badge}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#0b131d]/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-3.5 w-3.5 text-[#FFB162] fill-[#FFB162]" />
              <span className="text-white text-xs font-medium">{product.rating}</span>
              <span className="text-white/70 text-xs">({product.reviews})</span>
            </div>

            {/* Navegación Interna */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-[#0b131d]/60 backdrop-blur-sm text-white hover:bg-[#FFB162] hover:text-[#1B2632] transition-colors flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-[#0b131d]/60 backdrop-blur-sm text-white hover:bg-[#FFB162] hover:text-[#1B2632] transition-colors flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Información */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-light tracking-[0.3em] text-[#FFB162] uppercase">
                  {product.category}
                </span>
                <span className="h-px w-8 bg-[#FFB162]/50"></span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                {product.name}
              </h3>
              <p className="text-sm text-white/70 font-light mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-end gap-3 flex-wrap">
              <span className="text-3xl font-light text-white tracking-tight">
                {product.price}
              </span>
              <span className="text-sm font-light text-white/40 line-through mb-1">
                {product.originalPrice}
              </span>
              <span className="text-xs font-medium text-[#FFB162] bg-[#FFB162]/10 px-2 py-0.5 rounded border border-[#FFB162]/20">
                Ahorra {product.discount}
              </span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 bg-[#FFB162] hover:bg-[#e69a4a] text-[#1B2632] font-semibold tracking-wider uppercase text-xs rounded-full transition-all duration-300 shadow-lg shadow-[#FFB162]/20">
                Comprar ahora
              </button>
              <button className="px-4 py-3 border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300">
                <Heart className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-[11px] font-light text-white/60">
              <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-[#FFB162]" /> Envío gratis</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[#FFB162]" /> 2 Años Garantía</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#FFB162]" /> Entrega 24h</span>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full h-1 ${
                index === currentSlide ? "w-8 bg-[#FFB162]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// COMPONENTE: HERO
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxury Architecture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b131d]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b131d] via-[#1B2632]/80 to-transparent" />
      </div>

      <div className="relative z-10 container-premium w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left animate-fade-in-up">
            <p className="uppercase tracking-[.3em] text-[#FFB162] text-xs font-semibold">
              CURACIONES EXQUISITAS
            </p>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
              Eleva tu estilo de vida con <span className="font-normal text-[#FFB162]">lujo atemporal.</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Descubre una cuidada selección de prendas de diseñadores de renombre, electrónica de alta gama y diseño interior exclusivo.
            </p>

            {/* Buscador Responsivo */}
            <div className="pt-4 max-w-xl">
              <div className="flex flex-col sm:flex-row items-center bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-1.5 w-full gap-2 sm:gap-0 border border-white/20">
                <div className="flex items-center flex-1 w-full pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2C3B4D]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Busca marcas o artículos exclusivos..."
                    className="w-full bg-transparent px-3 py-3 outline-none text-[#1B2632] placeholder-[#777777] text-sm font-light"
                  />
                </div>
                <button className="w-full sm:w-36 h-12 rounded-xl bg-[#2C3B4D] hover:bg-[#1B2632] text-white text-xs font-medium tracking-wider uppercase transition-all duration-300 shrink-0">
                  Explorar
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link href="/store">
                <button className="h-12 px-6 rounded-full bg-white text-[#1B2632] hover:bg-[#FFB162] hover:text-[#1B2632] flex items-center gap-2 font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-md">
                  Ir a la tienda <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/about" className="text-white/90 font-medium text-xs tracking-wider uppercase border-b border-white/40 pb-1 hover:text-[#FFB162] hover:border-[#FFB162] transition-colors">
                Nuestra historia
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
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
      name: "Alta Costura",
      description: "Vanguardia y clásicos confeccionados a mano.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    },
    {
      name: "Alta Tecnología",
      description: "Rendimiento puro y estética minimalista.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    },
    {
      name: "Espacios & Hogar",
      description: "Mobiliario y objetos de diseño de autor.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    },
    {
      name: "Joyas & Relojes",
      description: "Piezas de herencia y gemas atemporales.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-premium">
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs tracking-[0.25em] text-[#777777] uppercase font-medium">COLECCIONES SELECTAS</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1B2632] mt-2">
            Mundos <span className="text-[#FFB162] font-normal">curados</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-[#777777] font-light text-base leading-relaxed mt-4">
            Categorías minuciosamente seleccionadas para los conocedores de la excelencia y el diseño atemporal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative h-96 overflow-hidden rounded-2xl hover-lift bg-[#1B2632]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b131d] via-[#1B2632]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                <h3 className="text-xl font-normal text-white">{category.name}</h3>
                <p className="text-xs text-white/80 font-light line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-2 flex items-center text-[10px] font-semibold tracking-widest uppercase text-[#FFB162] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explorar Universo <ArrowRight className="ml-1.5 h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE: SELECCIÓN DE TEMPORADA
// ============================================
function SeasonalSection() {
  return (
    <section className="py-24 bg-[#f1f5f9]">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#2C3B4D] uppercase block">
              SELECCIÓN EDITORIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1B2632]">
              La calidez de la <span className="text-[#FFB162] font-normal">Serie Terracotta</span>
            </h2>
            <p className="text-base text-[#777777] font-light leading-relaxed">
              Disfruta de la transición de temporada con texturas orgánicas, cueros premium y tonos tierra. Piezas exclusivas de edición limitada hechas para perdurar.
            </p>
            <button className="px-8 py-3 bg-[#2C3B4D] hover:bg-[#FFB162] hover:text-[#1B2632] text-white font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300 shadow-md flex items-center gap-2">
              Descubrir Colección <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-7 aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" alt="Otoño editorial" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-5 flex flex-col gap-4">
              <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img src="https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80" alt="Detalle lujo" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80" alt="Accesorios cuero" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE: ICONOS DESTACADOS
// ============================================
function FeaturedIcons() {
  const products = [
    {
      name: "CHRONOS ELITE",
      description: "Caja de Titanio & Movimiento Suizo",
      price: "$4,250",
      icon: Watch,
      category: "Relojería",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80"
    },
    {
      name: "MAISON LUXE",
      description: "Cuero Vacuno de Curtido Vegetal",
      price: "$2,800",
      icon: Gem,
      category: "Accesorios",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80"
    },
    {
      name: "AURALLIS SONIC",
      description: "Cancelación de Ruido Adaptativa",
      price: "$899",
      icon: Laptop,
      category: "Audio",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80"
    },
    {
      name: "APEX MONOLITH",
      description: "Diseño ergonómico en Nogal",
      price: "$1,599",
      icon: Sofa,
      category: "Mobiliario",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-premium">
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs tracking-[0.25em] text-[#777777] uppercase font-medium">PIEZAS MAESTRAS</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1B2632] mt-2">
            Iconos de <span className="text-[#FFB162] font-normal">Ingeniería & Diseño</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group overflow-hidden bg-white rounded-2xl border border-[#e2e8f0] transition-all duration-500 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-md z-10">
                    <IconComponent className="h-4 w-4 text-[#2C3B4D]" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#FFB162]">
                    {product.category}
                  </div>
                  <h4 className="text-lg font-normal text-[#1B2632]">{product.name}</h4>
                  <p className="text-xs text-[#777777] font-light line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-light text-[#1B2632] pt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-[#e2e8f0] text-center space-y-4">
          <div className="flex justify-center gap-8 text-xs font-medium uppercase tracking-wider text-[#2C3B4D]">
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[#FFB162] fill-[#FFB162]" /> 4.9/5 Elite score</span>
            <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-[#FFB162]" /> Premium Selection</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE: TESTIMONIOS
// ============================================
function TestimonialSection() {
  return (
    <section className="py-24 bg-[#1B2632] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,177,98,0.05),transparent)]" />
      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[#FFB162] text-6xl font-serif block h-6">“</span>
          <blockquote className="text-xl md:text-2xl font-light text-white/90 leading-relaxed tracking-wide">
            La selección de productos de Apex Commerce no tiene parangón. Encontré piezas de diseño que llevaba años buscando. El servicio de conserjería internacional hizo que todo el proceso fuera impecable y seguro.
          </blockquote>
          <div className="w-12 h-px bg-[#FFB162]/40 mx-auto pt-2" />
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-white">Helena von Strauss</p>
            <p className="text-xs font-light text-white/60 mt-1">Coleccionista de Arte • Berlín</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOME PRINCIPAL
// ============================================
export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-[#FFB162] selection:text-[#1B2632]">
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