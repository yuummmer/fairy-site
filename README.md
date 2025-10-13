# FAIRy Site (by Datadabra)

Marketing & docs website for **FAIRy** — “Fix your data before you submit—local, open, and fast.”  
Built with Next.js + Tailwind. This repo contains only the **website** (no product code).

- **Product:** FAIRy (local-first dataset pre-check & export)
- **Company:** Datadabra  
- **Demo/Preview:** (add link when deployed)
- **Contact:** hello@datadabra.com

---

## ✨ What’s here

- Product pages: **Home**, **GEO Pre-check**, **Zenodo Pre-check**, **Export Pack**, **Early Access**
- Clean, accessible UI with Tailwind
- Company-anchored footer (Datadabra) + product-forward header (FAIRy)

## Getting Started

First, run the development server:

```bash
# clone & enter
git clone https://github.com/yuummmer/fairy-site.git
cd fairy-site

# node version (recommended)
nvm install && nvm use

#install & run
npm install
npm run dev

# open http://localhost: 3000
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
---

## ✨ Pages & copy anchors

- / – Hero + “How it works” + “What you get” + FAQ

Hero tagline: “Fix your data before you submit—local, open, and fast.”

CTA: Download FAIRy Solo · See sample Export Pack

Trust line: “Runs on your computer. Nothing is uploaded.”

/geo-precheck – Pre-check for GEO (dates → ISO, units → standard, IDs normalized)

/zenodo-precheck – Pre-check for Zenodo (similar checklist)

/export-pack – Explains ZIP contents: metadata.json, manifest.csv (SHA-256), README, checksums

/early-access – Simple form (stub); wire to your backend or form tool later
---
## 🧰 Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

Node version pinned via .nvmrc (lts/*)
---

## 🧪 Scripts
```bash
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```
---
## ☁️ Deploy
# Option A — Vercel (recommended)

1. Push this repo to GitHub (public is fine).

2. Import into Vercel → select main → Deploy.

3. Framework preset: Next.js (auto-detected).

# Option B — GitHub Pages (static export)


Add to next.config.ts:
```ts
const nextConfig = { output: "export" };
export default nextConfig;
```

Build & export:
```bash
npm run build
npx next export   # outputs to /out
```

Publish /out to a gh-pages branch (or /docs on main).
Add a Pages GitHub Action later to automate if desired.
---

🔐 Security & privacy

This repo contains only the marketing site. Do not commit secrets.
Use .env.local for any environment variables (git-ignored by default).
---

📄 License

MIT © Datadabra (or replace with your preferred license)
---

🤝 Contributing

Issues & PRs welcome for copy edits, typos, accessibility, and layout tweaks.
Product bugs/feature requests belong in fairy-core / fairy-skeleton repositories.
---

🧾 Changelog

Use GitHub Releases to tag site changes (e.g., “v0.1 site shell”, “Hero refresh”).