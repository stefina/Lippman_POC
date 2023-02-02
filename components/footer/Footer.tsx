import React from 'react'
import styles from './Footer.module.scss'
import { ActiveLink } from '../ActiveLink'

export default function Footer() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <ActiveLink
            href="/a-propos"
            activeClassName={styles.active}
          >
            Á propos
          </ActiveLink>
        </li>
        <li className={styles.navItem}>
          <ActiveLink
            href="/gabriel-lippmann"
            activeClassName={styles.active}
          >
            Gabriel Lippmann
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}
