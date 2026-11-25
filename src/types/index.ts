export interface NavLink { label: string; href: string }

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  colorway: string;
  badge?: string;
  /** Optional photo. Falls back to the illustrated placeholder. */
  image?: string;
  swatches: string[];
  palette: { upper: string; sole: string; accent: string };
}

export interface FooterColumn { title: string; links: NavLink[] }
