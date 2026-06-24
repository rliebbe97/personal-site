# Content Sources — what lives where

This site pulls content from **three places**. Use this as the map for "where do I change X?"

| Content | Source | You edit it in… | Code that reads it |
|---|---|---|---|
| **Words** (blog/essays) | **Substack** | [robybuilds.substack.com](https://robybuilds.substack.com) | `lib/substack.ts` (RSS) |
| **Photos** | **Sanity** | `/studio` | `sanity/lib/fetch.ts` → `getPhotos()` |
| **Projects** (Work) | **Sanity** | `/studio` | `sanity/lib/fetch.ts` → `getProjects()` |
| **Shelf** (books/films/podcasts) | **Sanity** (covers auto-fetched) | `/studio` | `sanity/lib/fetch.ts` → `getShelf()` |
| **Interests** | **In repo** | `lib/interests.ts` | imported directly |
| **Hero copy / tagline** | **In repo** | `components/Hero.tsx` | — |
| **Nav links** | **In repo** | `components/Navbar.tsx` | — |

---

## 1. Substack → Words (blog)

**Substack is the source of truth for blog posts.** Write and publish on Substack; the site mirrors the feed automatically.

- Publish a post on **robybuilds.substack.com**.
- The site fetches `https://robybuilds.substack.com/feed` (RSS) and lists posts in the **Words** section (homepage + `/words`).
- Posts appear within ~10 minutes (`revalidate = 600`) — no rebuild/deploy needed.
- Clicking a post **opens it on Substack** in a new tab (marked with `↗`). The site does not render the post inline — this keeps the minimal theme clean and avoids Substack's embedded widgets.
- Cross-posting to Twitter/X long-form is **manual** (no publish API exists for those platforms).
- Code: `lib/substack.ts` (uses `rss-parser`). Config: `NEXT_PUBLIC_SUBSTACK_URL`.

> Dormant: a Sanity `post` schema, `getPosts()/getPost()`, and the `/words/[slug]` in-site reader still exist but are **unused**. They're kept in case you ever want site-native posts instead of Substack. Today, nothing links to them.

## 2. Sanity → Photos, Projects & Shelf

**Sanity is the CMS for photos, projects, and the shelf.** Edit them in the embedded Studio.

- Open **`/studio`** (e.g. `localhost:3000/studio` or `yourdomain.com/studio`), log in, and add/edit:
  - **Photo** — image (auto-served via Sanity's CDN, optimized + resized), location/caption, "wide" toggle.
  - **Project** — title, slug, description, tags, year.
  - **Shelf item** — title, creator, type (book/film/podcast), optional note. **Cover art is fetched automatically** (see below) — you usually only type a title + creator.
- Changes appear within ~60s (`revalidate = 60`; shelf is 5 min).

### Shelf covers (automatic)

You don't upload covers. `lib/covers.ts` resolves each item's art from free, keyless APIs:
- **Books** → Open Library (by ISBN if the search hint looks like one, else title + author)
- **Films** → iTunes Search (first `feature-movie` match)
- **Podcasts** → iTunes Search (podcast)

Resolution order per item: **uploaded `cover` image → `coverUrl` → auto-fetched → flat color box** (if everything misses). Three optional override fields in the Studio handle edge cases:
- `cover` (upload) or `coverUrl` — force a specific image
- `searchHint` — an exact title or ISBN when the auto-pick is wrong

> Until you add shelf items in the Studio, the section falls back to the curated seed list in `lib/shelf.ts` (run through the same auto-cover lookup). Once Sanity has any shelf items, the seed is ignored.
- Project ID: `xy02ce00`, dataset: `production`.
- Code:
  - Schemas → `sanity/schemaTypes/` (`photo.ts`, `project.ts`, `post.ts`)
  - Queries → `sanity/lib/queries.ts` (GROQ)
  - Fetch helpers → `sanity/lib/fetch.ts` (return `[]` when Sanity isn't configured, so the site always builds)
  - Image URLs → `sanity/lib/image.ts`
  - Studio config → `sanity.config.ts`, `sanity.cli.ts`
  - Studio route → `app/studio/[[...tool]]/page.tsx`

## 3. In the repo → Interests & copy

These are simple enough that they live as TypeScript in the repo — edit the file and commit.

- **Interests** (Skiing, Soccer, etc. + their `/interests/[slug]` pages): `lib/interests.ts`
- **Shelf seed/fallback** (used only until Sanity has shelf items): `lib/shelf.ts`
- **Hero** name + tagline + location line: `components/Hero.tsx` (the old "still figuring it out" line is commented out, not deleted)
- **Navigation** links: `components/Navbar.tsx`

---

## Images, in short

- **Photos** → uploaded to Sanity, served from `cdn.sanity.io` (whitelisted in `next.config.js`).
- **Static assets** (favicon, etc.) → `public/`.

## Environment variables

Local values live in `.env.local` (gitignored). Template in `.env.example`. Set the same vars in **Vercel → Settings → Environment Variables** for production:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xy02ce00
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SUBSTACK_URL=https://robybuilds.substack.com
```

For the Studio to work on production, also allow the domain:
`npx sanity cors add https://your-domain.com --credentials`

## Page → source quick reference

| Route | Renders | From |
|---|---|---|
| `/` (home) | Work, Photos, Words, Shelf, Interests | Sanity + Substack + repo |
| `/photos` | Full photo gallery | Sanity |
| `/words` | Blog post list | Substack RSS |
| `/interests/[slug]` | Interest detail pages | `lib/interests.ts` |
| `/studio` | Sanity editing UI | Sanity |

## Housekeeping note

`app/about/page.tsx` is a leftover from the old light/parchment theme and isn't linked in the nav. It (and `components/ui/`, `components/Icons/`) can be removed if you don't plan to bring back an About page.
