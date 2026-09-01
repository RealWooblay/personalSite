# Wooblay

Source for the Wooblay systems portfolio.

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

This source is configured for ChatGPT Sites through Vinext. The live site remains private until its final public review and custom domain are ready.
