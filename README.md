# Vedant Subramanian - Personal Portfolio

A production-ready Next.js 15 portfolio website showcasing projects, achievements, and experience. Built with TypeScript, Tailwind CSS, and Framer Motion, the site is optimized for performance, accessibility, and search visibility.

## Performance Metrics

### Before and After Optimization

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Bundle Size (First Load JS) | 152 kB | 152 kB | Maintained |
| Image Compression | Original JPGs | AVIF (-65%) + WebP (-42%) | Significant reduction |
| ESLint Warnings | Multiple | 0 | Resolved |
| Accessibility | Unknown | axe-core tested, jsx-a11y compliant | Production-ready |
| SEO | Basic | OpenGraph, Twitter cards, Schema.org | Comprehensive |
| Font Performance | swap | optional + preload | Improved |

### Current Bundle Analysis
- **Main page**: 152 kB First Load JS (52.1 kB page + 99.7 kB shared)
- **Shared chunks**: 54.1 kB + 43.5 kB + 2.0 kB
- **Image formats**: AVIF (primary), WebP (fallback), original (final fallback)

## Development Scripts

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint + accessibility checks
npm run typecheck    # TypeScript validation
````

### Additional Scripts

```bash
npm run analyze         # Generate bundle analysis reports
npm run compress-images # Optimize images (AVIF/WebP + blur placeholders)
npm run bundle-budget   # Check bundle size after build
npm run test            # Run Playwright smoke tests + accessibility audits
npm run test:ui         # Playwright tests with UI
```

### CI/CD Pipeline

GitHub Actions runs automatically on each push:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. `npm run bundle-budget`

## Image Optimization

The `npm run compress-images` script:

* Converts images to AVIF and WebP (65% and 42% smaller on average)
* Generates base64 blur placeholders in `src/data/blurData.json`
* Maintains original formats as fallbacks
* Processes all assets in `/public`

## Accessibility

* Verified with axe-core automated testing
* jsx-a11y linting rules enforced
* All images and interactive elements tested for compliance

## Production Features

### Performance

* Optimized font loading with preloading and `display: optional`
* Automated image compression with AVIF and WebP formats
* Bundle analysis and size monitoring
* Animations respect user motion preferences

### SEO & Metadata

* OpenGraph and Twitter card metadata for sharing
* Structured data (JSON-LD) for Person schema
* Auto-generated XML sitemap and robots.txt
* Canonical URL configuration

### Quality Assurance

* Zero ESLint warnings with strict rules
* TypeScript strict mode enabled
* Playwright smoke tests and accessibility validation
* Automated CI/CD pipeline with quality gates

## Testing

### Smoke Tests Cover

* Homepage loading and accessibility (with region rule disabled for design flexibility)
* Navigation functionality (#home, #timeline, #projects, #achievements, #contact)
* Image loading verification
* Responsive design across viewports
* Automated accessibility audits with axe-core

### Running Tests

```bash
npm test        # Headless run
npm run test:ui # Interactive test UI
```

## Project Structure

```
src/
├── app/                 # Next.js 15 App Router
│   ├── layout.tsx       # Root layout with fonts & SEO
│   ├── page.tsx         # Homepage
│   ├── robots.txt/      # SEO robots endpoint
│   └── sitemap.xml/     # SEO sitemap endpoint
├── components/          # React components
│   └── motion/          # Framer Motion wrappers
├── data/                # Static data & generated assets
│   └── blurData.json    # Auto-generated blur placeholders
└── scripts/             # Build & optimization scripts
```

## Deployment Checklist

1. Update site verification in `layout.tsx`
2. Configure domain URLs in sitemap and robots.txt
3. Run `npm run build && npm start` for production
4. Validate with `npm test && npm run lint`
5. Confirm bundle size with `npm run analyze`

## Tech Stack

* **Framework**: Next.js 15 with App Router
* **Language**: TypeScript (strict mode)
* **Styling**: Tailwind CSS 4
* **Animation**: Framer Motion (tree-shaken)
* **Testing**: Playwright + axe-core
* **CI/CD**: GitHub Actions
* **Fonts**: Inter, Space Grotesk, JetBrains Mono
* **Images**: Sharp (AVIF/WebP optimization)



Built by Vedant Subramanian | Optimized for performance, accessibility, and SEO.

