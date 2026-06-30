export const catalogProducts = [
  {
    id: 1,
    brand: "AETHELGARD",
    name: "Chronos VII Minimalist",
    price: 2450,
    badge: "Edición Limitada",
    badgeVariant: "tertiary",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 2,
    brand: "SWISS SERIES",
    name: "Vanguard S Elite",
    price: 1290,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: 3,
    brand: "TECH PRO",
    name: "Prestige G V1",
    price: 890,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
  },
  {
    id: 4,
    brand: "LUXELINE",
    name: "Horizon Pro Max",
    price: 3450,
    badge: "Edición Limitada",
    badgeVariant: "tertiary",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
  },
  {
    id: 5,
    brand: "AETHELGARD",
    name: "Chronos VII Minimalist",
    price: 2450,
    image: "https://images.unsplash.com/photo-1618164436246-4473940d1f65?w=600&q=80",
  },
  {
    id: 6,
    brand: "MAESTRO",
    name: "Nova Lux Series",
    price: 650,
    badge: "Nuevo Ingreso",
    badgeVariant: "neutral",
    image: "https://images.unsplash.com/photo-1434052428544-149743fe9903?w=600&q=80",
  },
  {
    id: 7,
    brand: "SWISS SERIES",
    name: "Vanguard S Elite",
    price: 1290,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
  },
  {
    id: 8,
    brand: "TECH PRO",
    name: "Prestige G V1",
    price: 890,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67dcc?w=600&q=80",
  },
];

export const catalogBrands = ["Maestro", "Swiss Series", "Tech Pro", "LuxeLine"];

export const catalogConditions = ["Nuevo", "Como Nuevo", "Excelente", "Bueno"];

const productDetailsExtra = {
  1: {
    category: "Grandes Complicaciones",
    description:
      "Un reloj excepcional con movimiento automático, esfera azul sunburst y diseño de caja icónico. Una verdadera inversión para el coleccionista exigente.",
    originalPrice: 2890,
    liveView: true,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
      "https://images.unsplash.com/photo-1618164436246-4473940d1f65?w=400&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
    ],
    specs: [
      { label: "Material de Caja", value: "Acero Inoxidable" },
      { label: "Diámetro de Caja", value: "40.0 mm" },
      { label: "Calibre", value: "324 S C" },
      { label: "Reserva de Marcha", value: "45 Horas" },
      { label: "Resistencia al Agua", value: "120 Metros" },
      { label: "Cierre", value: "Plegable Nautilus" },
    ],
  },
  2: {
    category: "Audio Premium",
    description:
      "Ingeniería acústica de estudio con cancelación de ruido adaptativa y materiales premium diseñados para experiencias de escucha inmersivas.",
    originalPrice: 1490,
    liveView: false,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
      "https://images.unsplash.com/photo-1546435770-a8887b9e72ae?w=400&q=80",
    ],
    specs: [
      { label: "Tipo de Driver", value: "Dinámico 40 mm" },
      { label: "Frecuencia", value: "4 Hz – 40 kHz" },
      { label: "Impedancia", value: "32 Ohmios" },
      { label: "Autonomía", value: "30 Horas" },
      { label: "Conectividad", value: "Bluetooth 5.3" },
      { label: "Peso", value: "250 g" },
    ],
  },
  4: {
    category: "Cuero de Lujo",
    description:
      "Cuero italiano cosido a mano con silueta arquitectónica y herrajes reforzados. Diseñado para el ejecutivo moderno.",
    originalPrice: 3990,
    liveView: true,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac738ae6830?w=400&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    ],
    specs: [
      { label: "Material", value: "Cuero de Grano Completo" },
      { label: "Dimensiones", value: "38 × 28 × 12 cm" },
      { label: "Herrajes", value: "Acero Cepillado" },
      { label: "Forro", value: "Interior en Ante" },
      { label: "Origen", value: "Milán, Italia" },
      { label: "Cuidado", value: "Kit Incluido" },
    ],
  },
};

function defaultDetailExtra(product) {
  return {
    category: "Colección Curada",
    description:
      "Una selección premium verificada en calidad y autenticidad. Elaborada con excepcional atención al detalle para el coleccionista exigente.",
    originalPrice: Math.round(product.price * 1.12),
    liveView: false,
    images: [product.image, product.image, product.image],
    specs: [
      { label: "Marca", value: product.brand },
      { label: "Condición", value: "Excelente" },
      { label: "Origen", value: "Vendedor Verificado" },
      { label: "Garantía", value: "12 Meses" },
      { label: "Envío", value: "Express Global" },
      { label: "Devoluciones", value: "Política de 14 Días" },
    ],
  };
}

export function getProductById(id) {
  const productId = Number(id);
  const base = catalogProducts.find((p) => p.id === productId) ?? catalogProducts[0];
  const extra = productDetailsExtra[base.id] ?? defaultDetailExtra(base);

  return { ...base, ...extra };
}

export function getRelatedProducts(id, limit = 4) {
  const productId = Number(id);
  return catalogProducts.filter((p) => p.id !== productId).slice(0, limit);
}
