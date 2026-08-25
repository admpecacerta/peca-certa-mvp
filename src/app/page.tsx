import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const categories = [
    "Capas",
    "Cabos e carregadores",
    "Películas",
    "Fones e áudio",
  ];
  const hasSocialLinks = Boolean(
    siteConfig.socialLinks.instagram || siteConfig.socialLinks.facebook,
  );

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans">
      <main className="flex w-full max-w-5xl flex-col gap-12 rounded-3xl bg-white p-10 shadow-sm sm:p-14">
        <section className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {siteConfig.name}
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              A base da sua loja de acessórios para celular, pronta para evoluir.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              Organize capas, cabos, carregadores, películas, suportes e fones
              em um marketplace pensado para destacar compatibilidade, preço e
              disponibilidade.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/loja"
              className="rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition"
            >
              Entrar na loja →
            </Link>
            <Link
              href="/loja/cadastro"
              className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition"
            >
              Cadastrar minha loja
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center">
            <span className="rounded-full bg-zinc-100 px-4 py-2">
              Catálogo focado em acessórios para celular
            </span>
            <span className="rounded-full bg-zinc-100 px-4 py-2">
              Estrutura pronta para futuras conexões com Instagram e Facebook
            </span>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <h2 className="text-base font-semibold text-zinc-950">
                {category}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Destaque os produtos mais buscados por marca, modelo e tipo de
                acessório.
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl bg-zinc-950 p-8 text-zinc-50 sm:grid-cols-[1.5fr_1fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Contato da marca</h2>
            <p className="max-w-xl text-sm leading-7 text-zinc-300">
              Atualize o e-mail de contato em{" "}
              <code className="rounded bg-white/10 px-2 py-1 font-mono text-xs">
                NEXT_PUBLIC_CONTACT_EMAIL
              </code>{" "}
              quando quiser trocar o endereço usado na vitrine.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <span className="block text-zinc-400">E-mail</span>
              <a
                className="font-medium text-white hover:text-zinc-200"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              <span className="block text-zinc-400">Redes sociais</span>
              {hasSocialLinks
                ? "Os links das redes sociais já podem ser publicados nesta vitrine."
                : "Instagram e Facebook serão conectados em uma próxima etapa."}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
