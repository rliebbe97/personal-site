# Personal Website - Project Documentation

## Project Overview

This is a personal portfolio website built with Next.js 14, showcasing projects, professional experience, and blog posts. The site features a refined, minimal dark/light neutral aesthetic with Pacific Cyan as a sparingly-used accent color.

### Purpose and Goals
- Showcase personal projects and professional experience
- Share technical writing and insights
- Create a warm, inviting online presence with a distinctive visual identity
- Demonstrate modern web development practices

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Component Library:** shadcn/ui
- **Typography:** Roboto Slab (body), Montserrat (headings)
- **Language:** JavaScript/TypeScript
- **Deployment:** Vercel (recommended)

### Design Inspiration
The design features:
- Generous whitespace and centered layouts
- Clean, refined typography
- Neutral parchment/pitch palette with cyan accent
- Minimal UI chrome, content-focused approach
- Subtle interactions (color appears on hover/focus, not constantly)

## Architecture

### App Router Structure
```
app/
├── layout.js              # Root layout with fonts and navbar
├── page.js                # Home page with hero and featured projects
├── globals.css            # Global styles and CSS variables
├── about/
│   └── page.tsx          # About page with bio and currently section
├── projects/
│   └── page.tsx          # Projects page with personal projects and experience
└── writing/
    ├── page.tsx          # Blog post list
    └── [slug]/
        └── page.tsx      # Individual blog post pages (dynamic routes)
```

### Component Organization
```
components/
├── Navbar.tsx            # Main navigation component
├── Icons/                # SVG icon components
│   ├── GithubIcon.js
│   ├── LinkedinIcon.js
│   └── TwitterIcon.js
└── ui/                   # shadcn/ui components
    ├── button.jsx
    ├── card.jsx
    ├── badge.jsx
    └── separator.jsx
```

### Data Management
All content is stored as TypeScript constants in `lib/data.ts`:
- **Projects:** Personal projects with descriptions, tags, and images
- **Companies:** Professional experience and roles
- **Blog Posts:** Articles with full content, metadata, and tags

This approach allows for easy content updates without a database or CMS.

## Design System

### Color Palette

The site uses a refined neutral palette with Pacific Cyan as a sparingly-used accent:

| Color Name | Hex       | Usage                                           |
|------------|-----------|------------------------------------------------|
| Parchment  | `#F5EFED` | Primary background                             |
| Pitch      | `#0F0A0A` | Primary text, dark anchor                      |
| Cyan       | `#2292A4` | Accent - ONLY for focus states, primary actions|

### Design Principle
Pacific Cyan appears primarily during interaction (hover, focus), not constantly. Visual hierarchy is achieved through spacing and typography first, color second.

### Usage Guidelines
- Use **parchment** for page backgrounds
- Use **pitch** for all body text and headings
- Use **pitch/70** for muted text (secondary info, metadata)
- Use **pitch/60** for social icons and subtle elements
- Use **cyan** ONLY for hover states and focus rings
- Active nav states use `text-pitch font-medium` (no accent color)
- Maintain high contrast for text readability

### Typography

**Font Families:**
- **Headings:** Montserrat (700 weight) - Applied via `font-header` class
- **Body:** Roboto Slab - Default font for all text

**Type Scale:**
- Hero title: `text-4xl` (mobile) / `text-5xl` (desktop) - weight 700
- Page title: `text-3xl` (mobile) / `text-4xl` (desktop) - weight 700
- Section heading: `text-2xl` (mobile) / `text-3xl` (desktop) - weight 700
- Card title: `text-xl` - weight 600
- Body: `text-base` (mobile) / `text-lg` (desktop) - weight 400
- Meta/small: `text-sm` - weight 400

**Line Height:**
- Use `leading-relaxed` for body text to improve readability

### Component Patterns

**Cards:**
Cards now have built-in hover transitions. Use default styling without overrides:
```jsx
<Card>
  <CardHeader>
    <CardTitle className="text-pitch font-header text-xl">
      Title
    </CardTitle>
    <CardDescription className="text-pitch/70 text-base">
      Description
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Badges:**
Use default variants without color overrides:
```jsx
<Badge variant="secondary">Tag</Badge>
<Badge variant="outline">Tag</Badge>
```

**Links:**
```jsx
<Link
  href="/path"
  className="text-pitch/70 hover:text-cyan transition-colors"
>
  Link Text
</Link>
```

### Interaction States
- **Hover on links**: `text-pitch/70` → `text-pitch` (or → `text-cyan` for primary)
- **Hover on cards**: `shadow-sm` → `shadow-md` with `duration-200`
- **Focus visible**: `ring-2 ring-cyan ring-offset-2`
- **Active nav**: `text-pitch font-medium` (solid, no accent color)

### Spacing System
- Use `gap-6` for grid layouts
- Use `mb-8` or `mb-12` for section spacing
- Use `py-16` for page padding
- Maximum content width: `max-w-5xl` (consistent across pages)

## Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:
```bash
npm run build
```

### Start Production Server

After building, start the production server:
```bash
npm start
```

## Development Guide

### Adding New Blog Posts

Edit `lib/data.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: 'url-friendly-slug',
  title: 'Your Post Title',
  date: '2024-01-15',
  excerpt: 'Brief description of the post...',
  content: `
    <h2>Section Heading</h2>
    <p>Your content here...</p>
  `,
  tags: ['Tag1', 'Tag2'],
  readTime: '5 min read'
}
```

The blog post will automatically be available at `/writing/url-friendly-slug`.

### Adding New Projects

Edit `lib/data.ts` and add a new entry to the `projects` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Brief description of the project...',
  tags: ['React', 'Next.js'],
  featured: true, // Set to true to show on home page
  image: '/project-image.png', // Optional
  link: 'https://github.com/user/repo' // Optional
}
```

### Adding Professional Experience

Edit `lib/data.ts` and add a new entry to the `companies` array:

```typescript
{
  id: 'unique-id',
  name: 'Company Name',
  role: 'Your Role',
  period: '2022 - Present',
  description: 'Brief description of your role and accomplishments...',
  tags: ['Skill1', 'Skill2', 'Skill3']
}
```

### Customizing Colors

To change the color palette:

1. Update hex values in `tailwind.config.js`:
```javascript
colors: {
  pitch: '#YOUR_COLOR',
  parchment: '#YOUR_COLOR',
  cyan: '#YOUR_COLOR',
}
```

2. Update CSS variables in `app/globals.css` (convert hex to HSL):
```css
:root {
  --background: H S L; /* parchment in HSL */
  --foreground: H S L; /* pitch in HSL */
  --primary: H S L; /* cyan in HSL */
  --ring: H S L; /* cyan for focus rings */
  // ...
}
```

### Using shadcn Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add component-name
```

Import and use in your pages:
```jsx
import { ComponentName } from '@/components/ui/component-name'
```

### Updating Social Links

Update placeholder URLs in:
- `app/page.js` (home page social icons)
- `app/about/page.tsx` (about page connect section)

Replace `https://linkedin.com/in/placeholder` with your actual profiles.

### Adding Images

Place images in the `public/` directory and reference them:

```jsx
import Image from 'next/image'
import myImage from '../public/my-image.png'

<Image src={myImage} alt="Description" />
```

Or use string paths for images in the public directory:
```jsx
<Image src="/my-image.png" alt="Description" fill />
```

## Project Structure

### Key Directories

- **`/app`** - Next.js app router pages and layouts
- **`/components`** - React components (UI and icons)
- **`/lib`** - Utility functions and data
- **`/public`** - Static assets (images, fonts)

### Key Files

| File | Purpose |
|------|---------|
| `app/layout.js` | Root layout, font configuration, metadata |
| `app/globals.css` | Global styles, CSS variables, base layer styles |
| `tailwind.config.js` | Tailwind configuration, custom colors, fonts |
| `lib/data.ts` | All mock content data (projects, posts, experience) |
| `lib/utils.js` | Utility functions (cn helper for class merging) |
| `components/Navbar.tsx` | Site navigation with active state handling |
| `components.json` | shadcn/ui configuration |

### Icon Components

Located in `components/Icons/`:
- Self-contained SVG components using `currentColor`
- Accept `className` prop for styling
- Use `fill-current` or `stroke-current` with text color classes
- Example: `<GithubIcon className="fill-current text-pitch/60 hover:text-cyan h-6 w-6" />`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder and `public` directory
3. Set Node.js environment
4. Run `npm start`

## Performance Considerations

- All blog posts are statically generated at build time
- Images use Next.js Image component for optimization
- Font variables prevent layout shift
- Minimal JavaScript bundle with server components

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox

## Future Enhancements

Potential improvements to consider:
- Add MDX support for richer blog content
- Implement dark mode toggle
- Add contact form with backend integration
- Integrate analytics (Vercel Analytics, Google Analytics)
- Add RSS feed for blog posts
- Implement search functionality
- Add animations with Framer Motion
- Create a CMS integration (Contentful, Sanity)

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

### Styling Issues

If Tailwind classes aren't working:
1. Check that the file is included in `tailwind.config.js` content array
2. Restart the development server
3. Clear browser cache

### Font Issues

If fonts aren't loading:
1. Check that font variables are applied in `app/layout.js`
2. Verify font configuration in `tailwind.config.js`
3. Check browser console for font loading errors

## Support

For issues or questions:
1. Check Next.js documentation: https://nextjs.org/docs
2. Check shadcn/ui documentation: https://ui.shadcn.com
3. Check Tailwind CSS documentation: https://tailwindcss.com/docs

## License

This is a personal project. Modify as needed for your own use.
