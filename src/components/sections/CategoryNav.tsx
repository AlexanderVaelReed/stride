import { categories } from '@/data/content';
import { Button } from '@/components/ui/Button';
import styles from './CategoryNav.module.css';

export function CategoryNav() {
  return (
    <nav className={`container ${styles.wrap}`} aria-label="Shop by category">
      <p className={`eyebrow ${styles.label}`}>Find your stride</p>
      <ul className={styles.list}>
        {categories.map((c) => (
          <li key={c.href}><Button href={c.href} variant="outline">{c.label}</Button></li>
        ))}
        <li className={styles.all}><Button href="#all" variant="solid">All shoes</Button></li>
      </ul>
    </nav>
  );
}
