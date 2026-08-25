import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory, getCategoryBySlug } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = getCategoryBySlug(categoria);
  return {
    title: cat ? `${cat.label} — ${siteConfig.name}` : siteConfig.name,
  };
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = getCategoryBySlug(categoria);
  if (!cat) notFound();

  const items = getProductsByCategory(categoria);

  return (
    <div className="min-h-full bg-zinc-50 font-sans">
      <header className="bg-white border-b border-zinc-200 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-950 tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <Link href="/loja" className="hover:text-zinc-950">Loja</Link>
            <Link href="/loja/cadastro" className="hover:text-zinc-950">Cadastrar loja</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 flex items-center gap-2">
          <Link href="/loja" className="hover:text-zinc-800">Loja</Link>
          <span>/</span>
          <span className="text-zinc-800 font-medium">{cat.label}</span>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-4xl">{cat.emoji}</span>
          <h1 className="text-3xl font-bold text-zinc-950">{cat.label}</h1>
        </div>

        {items.length === 0 ? (
          <p className="text-zinc-500">Nenhum produto cadastrado nesta categoria ainda.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => {
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
                    className="w-full h-44 object-cover bg-zinc-100"
                  />
                  <div className="p-4 flex flex-col gap-1 flex-1">
                    <span className="text-xs text-zinc-500">{product.brand} · {product.phoneModel}</span>
                    <h2 className="text-sm font-semibold text-zinc-950 leading-snug">{product.name}</h2>
                    <p className="text-xs text-zinc-600 mt-1 line-clamp-2">{product.description}</p>
                    <p className="mt-auto pt-3 text-base font-bold text-green-700">
                      A partir de R$ {menorPreco.toFixed(2).replace(".", ",")}
                    </p>
                    <span className="text-xs text-zinc-400">{product.offers.length} oferta{product.offers.length !== 1 ? "s" : ""}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-200 bg-white mt-16 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </div>
  );
}
