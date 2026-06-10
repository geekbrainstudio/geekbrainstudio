# Geek Brain Studio

Official website for [Geek Brain Studio](https://geekbrainstudio.github.io/geekbrainstudio/) — built with [Next.js](https://nextjs.org) (App Router) and deployed as a static site to **GitHub Pages**.

---

## 🚀 Live Site

**[https://geekbrainstudio.github.io/geekbrainstudio/](https://geekbrainstudio.github.io/geekbrainstudio/)**

---

## 🛠 Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.2.9 |
| React | 19 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| TypeScript | 5 |

---

## 📦 Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev
```

> **Note:** In development the `basePath` is empty (`""`), so all links resolve to `http://localhost:3000`. In production builds (`NODE_ENV=production`) the `basePath` is set to `/geekbrainstudio` to match the GitHub Pages sub-path.

---

## 🏗 Build & Preview Locally

```bash
# Generate the static export into the `out/` folder
npm run build

# Serve the `out/` folder locally to verify the production build
npx serve out
```

The `out/` folder is what gets deployed to GitHub Pages.

---

## ☁️ Deploying to GitHub Pages

Deployment is **fully automated** via GitHub Actions. Every push to `main` triggers a fresh build and deploy.

### How it works

1. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`.
2. It installs dependencies, runs `npm run build` with `NODE_ENV=production`, and uploads the `out/` folder as a Pages artifact.
3. GitHub Pages then serves the artifact at the live URL.

### One-time setup (do this once per repo)

1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` — the workflow will handle the rest.

### Manual deploy (optional)

You can also trigger a deploy manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

---

## ⚙️ Static Export Configuration

The static export is configured in [`next.config.ts`](next.config.ts):

```ts
const isProd = process.env.NODE_ENV === "production";
const repoName = "geekbrainstudio";

const nextConfig = {
  output: "export",          // generates the `out/` folder
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,       // /products/slug/ instead of /products/slug
  images: {
    unoptimized: true,       // required for static export
  },
};
```

### Limitations of static export

Because this site is a pure static export it **cannot** use:

- Server Actions
- Route Handlers that read the incoming `Request`
- `cookies()` / `headers()` dynamic APIs
- Incremental Static Regeneration (ISR)
- Next.js image optimisation (replaced with `unoptimized: true`)

See the [Next.js static export docs](https://nextjs.org/docs/app/guides/static-exports) for the full list.

---

## 🗂 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── products/[slug]/    # Dynamic product detail pages
├── components/             # Shared UI components
├── lib/
│   └── products.ts         # Product data & types
├── public/                 # Static assets (copied as-is to `out/`)
│   └── .nojekyll           # Prevents GitHub Pages Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
└── next.config.ts          # Next.js config (static export + basePath)
```

---

## 📝 License

© Geek Brain Studio. All rights reserved.
