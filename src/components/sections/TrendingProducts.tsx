import { products } from '@/data/content';
import { ProductCard } from '@/components/ui/ProductCard';
import { Icon } from '@/components/ui/Icon';
import styles from './TrendingProducts.module.css';

export function TrendingProducts() {
  return (
    <section id="new" className={`container ${styles.section}`} aria-labelledby="trending-title">
      <p className="eyebrow">The current rotation</p>
      <div className={styles.head}>
        <h2 id="trending-title" className={`display ${styles.title}`}>Trending now.</h2>
        <a href="#all" className={styles.more}>Shop all shoes <Icon name="arrow" size={20} /></a>
      </div>
      <ul className={styles.grid}>
        {products.map((p) => <li key={p.id}><ProductCard product={p} /></li>)}
      </ul>
    </section>
  );
}
