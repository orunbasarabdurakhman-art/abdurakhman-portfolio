# Abdurakhman — Student Developer Portfolio

Personal portfolio of Abdurakhman, a 16-year-old student developer studying Informatics & Mathematics at Ibilim High School.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages (Mac zsh)

```zsh
npm install
npx wrangler login
npm run deploy
```

`wrangler login` opens the browser once. After that, the site goes live on `*.pages.dev`.

## Edit content

Profile details, skills, projects and contact placeholders live in `src/data/content.ts`.
Replace the `#github`, `#telegram`, `#instagram` and email placeholders with real links when ready.
