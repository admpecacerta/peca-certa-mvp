// Dados de exemplo para visualização da loja de acessórios

export const categories = [
  { slug: "capas", label: "Capas", emoji: "📱" },
  { slug: "cabos-e-carregadores", label: "Cabos e Carregadores", emoji: "🔌" },
  { slug: "peliculas", label: "Películas", emoji: "🛡️" },
  { slug: "fones-e-audio", label: "Fones e Áudio", emoji: "🎧" },
];

export type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  phoneModel: string;
  imageUrl: string;
  categorySlug: string;
  offers: Offer[];
};

export type Offer = {
  id: number;
  storeName: string;
  storeUrl: string;
  price: number;
  originalUrl: string;
  available: boolean;
  shipping: number | null;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Capa Silicone iPhone 15",
    description: "Capa de silicone líquido com proteção para câmera e bordas reforçadas.",
    brand: "Apple Compatible",
    phoneModel: "iPhone 15",
    imageUrl: "https://placehold.co/400x400?text=Capa+iPhone+15",
    categorySlug: "capas",
    offers: [
      { id: 1, storeName: "Naka Shop", storeUrl: "#", price: 39.9, originalUrl: "#", available: true, shipping: 0 },
      { id: 2, storeName: "AcessóriosBR", storeUrl: "#", price: 44.9, originalUrl: "#", available: true, shipping: 8.5 },
    ],
  },
  {
    id: 2,
    name: "Capa Transparente Galaxy S24",
    description: "Capa anti-impacto transparente com borda colorida para Galaxy S24.",
    brand: "Samsung Compatible",
    phoneModel: "Galaxy S24",
    imageUrl: "https://placehold.co/400x400?text=Capa+Galaxy+S24",
    categorySlug: "capas",
    offers: [
      { id: 3, storeName: "Naka Shop", storeUrl: "#", price: 29.9, originalUrl: "#", available: true, shipping: 0 },
    ],
  },
  {
    id: 3,
    name: "Cabo USB-C 2m Turbo",
    description: "Cabo USB-C para USB-C com carga rápida 65W e nylon trançado.",
    brand: "Anker",
    phoneModel: "Universal USB-C",
    imageUrl: "https://placehold.co/400x400?text=Cabo+USB-C",
    categorySlug: "cabos-e-carregadores",
    offers: [
      { id: 4, storeName: "Naka Shop", storeUrl: "#", price: 49.9, originalUrl: "#", available: true, shipping: 0 },
      { id: 5, storeName: "CaboStore", storeUrl: "#", price: 52.0, originalUrl: "#", available: true, shipping: 5.0 },
    ],
  },
  {
    id: 4,
    name: "Carregador 65W GaN USB-C",
    description: "Carregador compacto GaN com porta USB-C, carga rápida para smartphones e notebooks.",
    brand: "Baseus",
    phoneModel: "Universal USB-C",
    imageUrl: "https://placehold.co/400x400?text=Carregador+GaN",
    categorySlug: "cabos-e-carregadores",
    offers: [
      { id: 6, storeName: "TechBR", storeUrl: "#", price: 119.9, originalUrl: "#", available: true, shipping: 0 },
    ],
  },
  {
    id: 5,
    name: "Película Vidro 9H iPhone 15",
    description: "Película de vidro temperado 9H com cobertura total para iPhone 15.",
    brand: "Hrebos",
    phoneModel: "iPhone 15",
    imageUrl: "https://placehold.co/400x400?text=Película+iPhone+15",
    categorySlug: "peliculas",
    offers: [
      { id: 7, storeName: "Naka Shop", storeUrl: "#", price: 24.9, originalUrl: "#", available: true, shipping: 0 },
      { id: 8, storeName: "VidroPlus", storeUrl: "#", price: 19.9, originalUrl: "#", available: true, shipping: 10.0 },
    ],
  },
  {
    id: 6,
    name: "Fone Bluetooth TWS ANC",
    description: "Fone in-ear sem fio com cancelamento de ruído ativo (ANC) e até 30h de bateria.",
    brand: "JBL",
    phoneModel: "Universal",
    imageUrl: "https://placehold.co/400x400?text=Fone+TWS",
    categorySlug: "fones-e-audio",
    offers: [
      { id: 9, storeName: "AudioBR", storeUrl: "#", price: 299.9, originalUrl: "#", available: true, shipping: 0 },
      { id: 10, storeName: "Naka Shop", storeUrl: "#", price: 319.9, originalUrl: "#", available: true, shipping: 0 },
    ],
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
