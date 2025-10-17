# Nai Salon Website (Astro)

Site for Nai Salon in Green, Ohio built with Astro and deployed on Vercel.

## 🚀 Project Structure

Project structure:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── (custom components)
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

Key features:

- Pages: Home, Services, Locations, About, Contact, Book, Blog
- HTMX-enhanced forms: `/contact`, `/book`
- Data-driven sections: `src/data/testimonials.json`, `src/data/gallery.json`
- SEO: meta, OpenGraph/Twitter, local `BeautySalon` schema

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Env configuration (optional)

To enable email notifications via Resend for contact/booking endpoints, set these environment variables (e.g., in Vercel Project Settings → Environment Variables):

- `RESEND_API_KEY`
- `RESEND_FROM` (e.g., `Nai Salon <hello@yourdomain.com>`)
- `RESEND_TO` (destination inbox)

Deploy works without these; forms still show success via HTMX.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
