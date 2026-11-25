# STRIDE

Mobile-first storefront landing page. React 18 · Vite · TypeScript · CSS Modules.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

## Structure

```
src/
  components/
    layout/     Announcement, Header, Footer
    sections/   Hero, CategoryNav, TrendingProducts, Feature, Perks, Newsletter
    ui/         Button, Icon, ProductCard, ShoeArt (reusable primitives)
  data/         content.ts — all copy, nav and products
  hooks/        useTheme (persisted light/dark)
  styles/       tokens.css (design tokens), global.css
  types/        shared interfaces
  utils/        format helpers
```

- Design tokens live in `src/styles/tokens.css`; dark mode swaps the semantic tokens.
- Add real photos via `Product.image` in `data/content.ts` (files in `public/images`).
- Breakpoints (min-width): 768px tablet, 900px nav/hero split, 1024px grids.
