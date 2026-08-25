# Naka Acessórios

Base MVP em **Next.js + Prisma + TypeScript + Tailwind** para a Naka Acessórios, um marketplace de acessórios para celular.

## O que esta base cobre

- branding inicial da Naka Acessórios
- landing page com foco em capas, cabos, carregadores, películas, suportes e fones
- schema Prisma para catálogo, lojas, ofertas, alertas e histórico de preços
- placeholder de contato por e-mail e espaço preparado para futuras integrações com Instagram e Facebook

## Getting Started

Primeiro, instale as dependências e suba o ambiente local:

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver a vitrine inicial.

## Configuração rápida

Defina as variáveis de ambiente necessárias antes de trabalhar com dados reais:

```bash
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_CONTACT_EMAIL="contato@nakaacessorios.com"
NEXT_PUBLIC_INSTAGRAM_URL=""
NEXT_PUBLIC_FACEBOOK_URL=""
```

O e-mail fica centralizado em `src/lib/site-config.ts`, com fallback para o valor de `NEXT_PUBLIC_CONTACT_EMAIL`.

## Próximos passos sugeridos

- cadastrar o e-mail oficial da marca na variável `NEXT_PUBLIC_CONTACT_EMAIL`
- popular o catálogo inicial de acessórios por categoria, marca e modelo compatível
- conectar Instagram e Facebook quando os perfis estiverem prontos
- adicionar fluxos reais de importação/sincronização de ofertas

## Desenvolvimento

- `npm run lint` para validar o código
- `npm run build` para verificar a aplicação em produção
- `npx prisma validate` para validar o schema Prisma

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
