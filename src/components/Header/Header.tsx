import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export type NavItemType = {
  label: string;
  href?: string;
  subItems?: NavItemType[];
  /* если true — рендерить через react-router Link (если у вас установлен react-router-dom) */
  useRouter?: boolean;
};

type Props = {
  logoText: string;
  navItems: NavItemType[];
  localeEmoji?: string;
  onLocaleToggle?: () => void;
  onThemeToggle?: () => void;
};

export default function Header({
  logoText,
  navItems,
  localeEmoji = '🇷🇺',
  onLocaleToggle,
  onThemeToggle,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.inner} container`}>
          <div className={styles.left}>
            <a className={styles.logo} href="/" aria-label="Home">
              {logoText}
            </a>
          </div>

          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((it, idx) =>
              it.subItems ? (
                <DropdownMenu key={idx} label={it.label} items={it.subItems} />
              ) : (
                <NavItem key={idx} label={it.label} href={it.href} useRouter={it.useRouter} />
              )
            )}
          </nav>

          <div className={styles.right}>
            <button
              className={styles.iconBtn}
              aria-label="Switch language"
              onClick={onLocaleToggle}
              title="Сменить язык"
            >
              <span className={styles.emoji}>{localeEmoji}</span>
            </button>

            <ThemeToggle onToggle={onThemeToggle} />

            {/* mobile hamburger */}
            <button
              className={styles.hamburger}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className={styles.hamburgerBox}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile slide-out */}
      <div
        className={`${styles.mobileBackdrop} ${mobileOpen ? styles.open : ''}`}
        onClick={closeMobile}
        role="presentation"
      />

      <aside className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`} aria-hidden={!mobileOpen}>
        <div className={styles.mobileHeader}>
          <a className={styles.logo} href="/" onClick={closeMobile}>
            {logoText}
          </a>
          <button className={styles.iconBtn} onClick={closeMobile} aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className={styles.mobileNav}>
          {navItems.map((it, idx) =>
            it.subItems ? (
              <div key={idx} className={styles.mobileGroup}>
                <div className={styles.mobileGroupTitle}>{it.label}</div>
                <div className={styles.mobileGroupList}>
                  {it.subItems.map((s, si) => (
                    <a key={si} href={s.href} className={styles.mobileItem} onClick={closeMobile}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={idx} href={it.href} className={styles.mobileItem} onClick={closeMobile}>
                {it.label}
              </a>
            )
          )}
        </div>
      </aside>
    </>
  );
}
