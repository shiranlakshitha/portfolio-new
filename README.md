# Shiran Lakshitha — Portfolio

A responsive single-page portfolio for a Computer Science undergraduate focused on Cloud Engineering and DevOps. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide icons.

The visual system uses a **Multi-Cloud Midnight** palette: midnight infrastructure backgrounds, sky-blue interface accents, AWS orange, Azure blue, Kubernetes blue, and green pipeline success states.

The interface incorporates documented patterns from:

- React Bits — Blur Text for the home heading
- Magic UI — Bento Grid for projects
- Aceternity UI — Floating Navbar and Timeline

## Local setup

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To verify a production build:

```bash
npm run typecheck
npm run build
```

The static production output is written to `out/`.

## Updating portfolio content

Edit [`data/portfolio.ts`](./data/portfolio.ts). It contains:

- name, title, introduction, and about copy
- email, GitHub, and LinkedIn links
- CV path and label
- projects, statuses, technologies, deployment flows, and ordering
- skills
- experience and education entries

Empty URLs and dates are automatically hidden. To add real links, replace the empty strings. For example:

```ts
social: {
  email: "hello@example.com",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username/",
},
```

Place a real CV PDF in `public/`, then set `cv.url` to `/shiran-lakshitha-cv.pdf`.

Projects can be reordered directly in the `projects` array. Set `enabled: false` to hide a project, `featured: true` to give it the larger Bento card, and update `status`, `repositoryUrl`, or `liveUrl` as needed. Use the `accent` field (`azure`, `aws`, `kubernetes`, or `cloud`) to select its cloud-specific color treatment.

## Production

The project uses `output: "export"` in `next.config.ts`, making it suitable for static hosting. Run `npm run build` and deploy the generated `out/` directory.
