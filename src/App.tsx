import { Announcement } from '@/components/layout/Announcement';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { CategoryNav } from '@/components/sections/CategoryNav';
import { TrendingProducts } from '@/components/sections/TrendingProducts';
import { Feature } from '@/components/sections/Feature';
import { Perks } from '@/components/sections/Perks';
import { Newsletter } from '@/components/sections/Newsletter';

export function App() {
  return (
    <>
      <Announcement />
      <Header cartCount={0} />
      <main>
        <Hero />
        <CategoryNav />
        <TrendingProducts />
        <Feature />
        <Perks />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
