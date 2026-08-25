import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById, getCategoryBySlug } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));
  return {
    title: product ? `${product.name} — ${siteConfig.name}` : siteConfig.name,
  };
}

export default async function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const menorOferta = product.offers.reduce((a, b) => (a.price < b.price ? a : b));

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

      <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 flex items-center gap-2 flex-wrap">
          <Link href="/loja" className="hover:text-zinc-800">Loja</Link>
          <span>/</span>
          {category && (
            <>
              <Link href={`/loja/${category.slug}`} className="hover:text-zinc-800">{category.label}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-zinc-800 font-medium truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Produto */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full rounded-2xl object-cover bg-zinc-100 aspect-square"
          />

          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs text-zinc-500 uppercase tracking-wide">{product.brand} · {product.phoneModel}</span>
              <h1 className="mt-1 text-2xl font-bold text-zinc-950 leading-snug">{product.name}</h1>
              {product.description && (
                <p className="mt-3 text-zinc-600 text-sm leading-7">{product.description}</p>
              )}
            </div>

            <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-700 font-medium">Melhor preço</p>
              <p className="text-3xl font-bold text-green-800 mt-1">
                R$ {menorOferta.price.toFixed(2).replace(".", ",")}
              </p>
              {menorOferta.shipping === 0 && (
                <span className="mt-1 inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Frete grátis</span>
              )}
              <a
                href={menorOferta.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-xl bg-green-700 text-white text-center py-2.5 text-sm font-semibold hover:bg-green-800 transition"
              >
                Ver na {menorOferta.storeName}
              </a>
            </div>
          </div>
        </section>

        {/* Todas as ofertas */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-950 mb-4">Todas as ofertas ({product.offers.length})</h2>
          <div className="space-y-3">
            {product.offers
              .slice()
              .sort((a, b) => a.price - b.price)
              .map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-zinc-950 text-sm">{offer.storeName}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {offer.shipping === 0
                        ? "Frete grátis"
                        : offer.shipping
                        ? `+ R$ ${offer.shipping.toFixed(2).replace(".", ",")} frete`
                        : "Frete a consultar"}
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="text-lg font-bold text-zinc-950">
                      R$ {offer.price.toFixed(2).replace(".", ",")}
                    </p>
                    <a
                      href={offer.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-zinc-300 px-4 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition"
                    >
                      Ver oferta
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white mt-16 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </div>
  );
}
