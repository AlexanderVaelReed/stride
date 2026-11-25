import { footerColumns } from '@/data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>STRIDE<sup>®</sup></p>
            <p className={styles.tagline}>Good shoes. Great places.</p>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className={styles.title}>{col.title}</h2>
              <ul>
                {col.links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} STRIDE. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms of service</a>
          </div>
          <p>United States · USD $</p>
          <a className={styles.forward} href="#top">Keep moving forward ↗</a>
        </div>
      </div>
    </footer>
  );
}
