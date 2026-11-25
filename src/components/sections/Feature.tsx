import { Button } from '@/components/ui/Button';
import styles from './Feature.module.css';

export function Feature() {
  return (
    <section id="collections" className={styles.feature} aria-labelledby="feature-title">
      <div className={styles.media}>
        <img src="/images/feature-person.jpg" alt="Sneakers lined up for everyday wear" />
      </div>
      <div className={styles.copy}>
        <p className={`eyebrow ${styles.eyebrow}`}>Built for the in-between</p>
        <h2 id="feature-title" className={`display ${styles.title}`}>Not just a shoe. A way to move.</h2>
        <p className={styles.text}>
          From your first coffee to the long way home. Meet everyday essentials that keep up with wherever life takes you.
        </p>
        <Button href="#collections" variant="lime">Explore the collection</Button>
      </div>
    </section>
  );
}
