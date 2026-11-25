import type { FooterColumn, NavLink, Product } from '@/types';

export const mainNav: NavLink[] = [
  { label: 'New arrivals', href: '#new' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Collections', href: '#collections' },
];

export const categories: NavLink[] = [
  { label: 'Everyday', href: '#everyday' },
  { label: 'Running', href: '#running' },
  { label: 'Training', href: '#training' },
  { label: 'Outdoor', href: '#outdoor' },
];

export const products: Product[] = [
  {
    id: 'pace-01', name: 'Pace 01', price: 125, category: 'Everyday sneaker',
    colorway: 'Bone / Moss', badge: 'Bestseller',
    swatches: ['#d9d8c8', '#5a6b4a', '#2b2d2a'],
    image: '/images/pace.jpg',
    palette: { upper: '#5f7a4b', sole: '#efe9da', accent: '#2f4a2c' },
  },
  {
    id: 'cloudform', name: 'Cloudform', price: 160, category: 'Running shoe',
    colorway: 'Silver / Lime', badge: 'Just dropped',
    swatches: ['#d9d8c8', '#5a6b4a', '#2b2d2a'],
    image: '/images/cloudform.jpg',
    palette: { upper: '#c4c6c6', sole: '#f4f4f1', accent: '#b7e05a' },
  },
  {
    id: 'court-classic', name: 'Court Classic', price: 110, category: 'Everyday sneaker',
    colorway: 'Chalk / Gum',
    swatches: ['#d9d8c8', '#5a6b4a'],
    image: '/images/court.jpg',
    palette: { upper: '#f6f5f0', sole: '#b8814a', accent: '#e4e2da' },
  },
  {
    id: 'trail-shift', name: 'Trail Shift', price: 145, category: 'Outdoor shoe',
    colorway: 'Sand / Rust',
    swatches: ['#d9d8c8', '#5a6b4a', '#2b2d2a'],
    image: '/images/trail.jpg',
    palette: { upper: '#c9b79c', sole: '#6b6256', accent: '#c4673a' },
  },
];

export const perks = [
  { icon: 'truck', title: 'On the house', text: 'Free shipping on orders $100+' },
  { icon: 'return', title: 'Find your perfect fit', text: 'Easy returns within 30 days' },
  { icon: 'shield', title: 'Here for the long run', text: 'Thoughtfully made. Built to last.' },
] as const;

export const footerColumns: FooterColumn[] = [
  { title: 'Explore', links: [
    { label: 'New arrivals', href: '#new' }, { label: 'Men’s shoes', href: '#men' },
    { label: 'Women’s shoes', href: '#women' }, { label: 'All collections', href: '#collections' },
  ] },
  { title: 'Need a hand?', links: [
    { label: 'Contact us', href: '#contact' }, { label: 'Shipping & returns', href: '#shipping' },
    { label: 'Size guide', href: '#sizes' }, { label: 'Track your order', href: '#track' },
  ] },
  { title: 'Our world', links: [
    { label: 'Our story', href: '#story' }, { label: 'Our approach', href: '#approach' },
    { label: 'Instagram', href: '#instagram' }, { label: 'Pinterest', href: '#pinterest' },
  ] },
];
