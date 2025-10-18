import React from 'react';
import styles from './NavItem.module.css';
import type { NavItemType } from '../Header';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  href?: string;
  useRouter?: boolean;
};

/**
 * NavItem поддерживает два варианта: обычная ссылка <a> и Link из react-router-dom
 * — если вы хотите использовать client-side routing, передайте useRouter={true} в NavItemType.
 */
export default function NavItem({ label, href = '#', useRouter = false }: Props) {
  if (useRouter && href) {
    return (
      <Link className={styles.navItem} to={href}>
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <a className={styles.navItem} href={href}>
      <span>{label}</span>
    </a>
  );
}
