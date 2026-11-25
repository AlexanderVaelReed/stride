import { useState } from 'react';
import type { Product } from '@/types';
import { formatPrice } from '@/utils/format';
import { Icon } from './Icon';
import { ShoeArt } from './ShoeArt';
import styles from './ProductCard.module.css';

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const { name, price, category, colorway, badge, image, swatches, palette } = product;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {image ? <img src={image} alt={name} loading="lazy" /> : <ShoeArt {...palette} className={styles.art} />}
        {badge && <span className={styles.badge}>{badge}</span>}
        <button
          className={styles.like}
          aria-pressed={liked}
          aria-label={liked ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          onClick={() => setLiked((v) => !v)}
        >
          <Icon name="heart" size={18} fill={liked ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className={styles.row}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{formatPrice(price)}</span>
      </div>
      <p className={styles.meta}>{category} · {colorway}</p>
      <ul className={styles.swatches} aria-label="Available colors">
        {swatches.map((c) => <li key={c} style={{ background: c }} />)}
      </ul>
    </article>
  );
}
