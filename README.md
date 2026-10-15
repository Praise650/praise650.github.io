# Praise Afuwape — Portfolio

Personal portfolio built with Vite, TypeScript, React, shadcn-ui, Tailwind CSS and Supabase.

## Getting started

```sh
npm i
npm run dev
```

Create a `.env` with `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_PROJECT_ID`.

## Seeding content

`npm run seed` populates experiences, skills and projects. Add `SEED_EMAIL` and `SEED_PASSWORD` (the owner's login) to `.env` first; pass `-- --reset` to replace existing rows.

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
