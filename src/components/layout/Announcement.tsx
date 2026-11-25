import styles from './Announcement.module.css';

export function Announcement() {
  return (
    <div className={styles.bar}>
      <p>Good shoes. Great places. <span aria-hidden="true">—</span> Free shipping on orders $100+</p>
    </div>
  );
}
