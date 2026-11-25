import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Icon } from './Icon';
import styles from './Button.module.css';

type Variant = 'ink' | 'lime' | 'solid' | 'outline';

interface Common { variant?: Variant; arrow?: boolean }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: AsButton | AsLink) {
  const { variant = 'ink', arrow = true, className = '', children, ...rest } = props;
  const cls = `${styles.button} ${styles[variant]} ${className}`;
  const content = (<><span>{children}</span>{arrow && <Icon name="arrow" size={20} />}</>);

  if ('href' in rest && rest.href) {
    return <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{content}</a>;
  }
  return <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>;
}
