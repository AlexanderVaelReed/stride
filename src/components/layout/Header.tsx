import { useState } from 'react';
import { mainNav } from '@/data/content';
import { useTheme } from '@/hooks/useTheme';
import { Icon } from '@/components/ui/Icon';
import styles from './Header.module.css';

export function Header({ cartCount }: { cartCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <button
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <a href="/" className={styles.logo} aria-label="STRIDE home">STRIDE<sup>®</sup></a>

        <nav id="main-nav" className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Main">
          <ul>
            {mainNav.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.theme} onClick={toggle} aria-pressed={dark}>
            <Icon name={dark ? 'sun' : 'moon'} size={18} />
            <span>{dark ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button className={styles.icon} aria-label="Search"><Icon name="search" /></button>
          <button className={`${styles.icon} ${styles.hideSm}`} aria-label="Account"><Icon name="user" /></button>
          <button className={styles.cart} aria-label={`Cart, ${cartCount} items`}>
            <Icon name="bag" /><span>({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
