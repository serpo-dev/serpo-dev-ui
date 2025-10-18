// Footer.tsx

import React from 'react';
import styles from './Footer.module.css';

export type FooterLinkType = {
  label: string;
  href: string;
};

export type FooterColumnType = {
  title: string;
  links: FooterLinkType[];
};

type Props = {
  logoSrc: string;
  title: string;
  subtitle: string;
  columns: FooterColumnType[];
  domain: string;
  copyright: string;
};

export default function Footer({
  logoSrc,
  title,
  subtitle,
  columns,
  domain,
  copyright,
}: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        {/* Левая часть */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logoSrc} alt="Logo" />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>

        {/* Правая часть с двумя колонками ссылок */}
        <div className={styles.right}>
          {columns.map((column, idx) => (
            <div key={idx} className={styles.column}>
              {/* <h4 className={styles.columnTitle}>{column.title}</h4> */}
              {column.links.map((link, linkIdx) => (
                <a key={linkIdx} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Нижняя строка */}
      <div className={styles.bottom}>
        <span className={styles.domain}>{domain}</span>
        <span className={styles.copyright}>{copyright}</span>
      </div>
    </footer>
  );
}