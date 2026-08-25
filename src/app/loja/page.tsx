import Link from "next/link";
import { categories, products } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Loja — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function LojaPage() {
  const destaques = products.slice(0, 4);

  return (
    <div className="min-h-full bg-zinc-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-950 tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <Link href="/loja" className="font-semibold text-zinc-950">Loja</Link>
            <Link href="/loja/cadastro" className="hover:text-zinc-950">Cadastrar loja</Link>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-zinc-950">Contato</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Acessórios para o seu celular
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Compare preços de capas, cabos, carregadores, películas e fones das melhores lojas em um só lugar.
          </p>
        </section>

        {/* Categorias */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-950 mb-6">Categorias</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/loja/${cat.slug}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm hover:border-zinc-400 hover:shadow-md transition"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="text-sm font-semibold text-zinc-800">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Produtos em destaque */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-950 mb-6">Produtos em destaque</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destaques.map((product) => {
              const menorPreco = Math.min(...product.offers.map((o) => o.price));
              return (
                <Link
                  key={product.id}
                  href={`/loja/produto/${product.id}`}
                  className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-40 object-cover bg-zinc-100"
                  />
                  <div className="p-4 flex flex-col gap-1 flex-1">
                    <span className="text-xs text-zinc-500">{product.brand} · {product.phoneModel}</span>
                    <h3 className="text-sm font-semibold text-zinc-950 leading-snug">{product.name}</h3>
                    <p className="mt-auto pt-3 text-base font-bold text-green-700">
                      A partir de R$ {menorPreco.toFixed(2).replace(".", ",")}
                    </p>
                    <span className="text-xs text-zinc-400">{product.offers.length} oferta{product.offers.length !== 1 ? "s" : ""}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white mt-16 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {siteConfig.name} · <a href={`mailto:${siteConfig.contactEmail}`} className="underline">{siteConfig.contactEmail}</a></p>
      </footer>
    </div>
  );
}
