export const siteConfig = {
  name: "Naka Acessórios",
  description:
    "Marketplace de acessórios para celular com capas, cabos, carregadores, películas e fones para diferentes modelos.",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@nakaacessorios.com",
  socialLinks: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;
