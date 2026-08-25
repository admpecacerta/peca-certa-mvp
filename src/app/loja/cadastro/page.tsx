import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Cadastrar Loja — ${siteConfig.name}`,
};

export default function CadastroLojaPage() {
  return (
    <div className="min-h-full bg-zinc-50 font-sans">
      <header className="bg-white border-b border-zinc-200 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-950 tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <Link href="/loja" className="hover:text-zinc-950">Loja</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-14 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-zinc-950 tracking-tight">Cadastre sua loja</h1>
          <p className="text-zinc-600 text-sm leading-7">
            Faça parte do marketplace Naka Acessórios. Preencha os dados abaixo e nossa equipe entrará em contato em até 48h.
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="store-name">
              Nome da loja *
            </label>
            <input
              id="store-name"
              type="text"
              required
              placeholder="Ex: Capas & Cia"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="store-url">
              URL da loja *
            </label>
            <input
              id="store-url"
              type="url"
              required
              placeholder="https://minhaloja.com.br"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="contact-email">
              E-mail de contato *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="contato@minhaloja.com.br"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="region">
              Região de atuação
            </label>
            <input
              id="region"
              type="text"
              placeholder="Ex: São Paulo – SP"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder-zinc-400 focus:border-zinc-600 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-800" htmlFor="sync-method">
              Como prefere integrar seus produtos?
            </label>
            <select
              id="sync-method"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 focus:border-zinc-600 focus:outline-none"
            >
              <option value="manual">Manual (enviamos via planilha)</option>
              <option value="feed">Feed de produtos (XML/CSV)</option>
              <option value="api">API</option>
              <option value="social">Instagram / Facebook Shops</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-950 text-white py-3 text-sm font-semibold hover:bg-zinc-800 transition"
            >
              Enviar cadastro
            </button>
          </div>

          <p className="text-xs text-zinc-400 text-center">
            Ao enviar, você concorda que nossa equipe possa entrar em contato pelo e-mail informado.
          </p>
        </form>
      </main>

      <footer className="border-t border-zinc-200 bg-white mt-16 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </div>
  );
}
