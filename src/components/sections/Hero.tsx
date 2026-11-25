import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className="eyebrow">The everyday, upgraded</p>
        <h1 id="hero-title" className={`display ${styles.title}`}>Go your own way.</h1>
        <p className={styles.lead}>For early starts. Late nights. And every step that makes the day yours.</p>
        <Button href="#new" variant="ink">Shop new arrivals</Button>
        <p className={styles.note}>Made to move. Designed to stand out.</p>
      </div>
      <div className={styles.art}>
        <img className={styles.shoe} src="/images/hero-stairs.jpg" alt="Sneakers worn on a city walk" />
        {/* <span className={styles.counter}>01 / 03</span> */}
      </div>
    </section>
  );
}
