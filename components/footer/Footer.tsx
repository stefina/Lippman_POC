import React from 'react';
import styles from './Footer.module.scss';
import { ActiveLink } from '../ActiveLink';

export default function Footer() {
  return (
    <footer>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <ActiveLink
              href="/a-propos"
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Á propos
            </ActiveLink>
          </li>
          <li className={styles.navItem}>
            <ActiveLink
              href="/gabriel-lippmann"
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Gabriel Lippmann
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
