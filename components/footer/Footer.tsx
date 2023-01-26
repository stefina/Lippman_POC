import React from 'react'
import styles from './Footer.module.scss'
import CustomLink from '../../components/link/Link'

export default function Footer() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <CustomLink
            label="Á propos"
            href="/a-propos"
            activeClassName={styles.active}
          />
        </li>
        <li className={styles.navItem}>
          <CustomLink
            label="Gabriel Lippmann"
            href="/gabriel-lippmann"
            activeClassName={styles.active}
          />
        </li>
      </ul>
    </nav>
  )
}
