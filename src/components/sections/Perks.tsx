import { perks } from '@/data/content';
import { Icon } from '@/components/ui/Icon';
import styles from './Perks.module.css';

export function Perks() {
  return (
    <section className={`container ${styles.section}`} aria-label="Why shop with us">
      <ul className={styles.list}>
        {perks.map((p) => (
          <li key={p.title} className={styles.item}>
            <Icon name={p.icon} size={26} />
            <div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
