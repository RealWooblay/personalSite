# Engineering Portfolio

Source for a personal engineering portfolio.

The site presents selected work across NVIDIA Jetson perception, spatial interfaces, autonomous agents, real time products and interactive systems. Technical claims link back to public repositories and measured project evidence.

WISP performance figures come from the repository's [measured Jetson benchmarks](https://github.com/RealWooblay/wisp-lab/blob/main/docs/measurements.md), with isolated inference and live pipeline rates kept distinct.

## Local development

```bash
pnpm install
pnpm dev
```

Run the project checks with:

```bash
pnpm lint
pnpm format --check
pnpm build
```

## Hosting

This is a native Next.js application configured for deployment on Vercel. The
project uses Vercel's production-domain environment value for canonical URLs,
social metadata, robots and the sitemap.
