import { useState, type FormEvent } from 'react';
import { isValidEmail } from '@/utils/format';
import { Button } from '@/components/ui/Button';
import styles from './Newsletter.module.css';

type Status = 'idle' | 'error' | 'success';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) return setStatus('error');
    // TODO: send `email` to your newsletter API here.
    setStatus('success');
    setEmail('');
  };

  return (
    <section className={styles.section} aria-labelledby="club-title">
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>The Stride Club</p>
        <h2 id="club-title" className={`display ${styles.title}`}>Good things. One step ahead.</h2>

        <div className={styles.side}>
          <p className={styles.lead}>
            New drops, fresh inspiration, and 10% off your first order. Join the club. We’ll keep you in the loop.
          </p>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" className="visually-hidden">Your email address</label>
            <input
              id="email" type="email" value={email} placeholder="Your email address" autoComplete="email"
              aria-invalid={status === 'error'} aria-describedby="email-status"
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
            />
            <Button type="submit" variant="ink">Sign me up</Button>
          </form>
          <p id="email-status" className={styles.status} role="status">
            {status === 'error' && 'Enter a valid email address, like name@example.com.'}
            {status === 'success' && 'You’re in. Check your inbox for your 10% code.'}
            {status === 'idle' && 'By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.'}
          </p>
        </div>

        <p className={styles.foot}>A little more sole in your inbox.</p>
      </div>
    </section>
  );
}
