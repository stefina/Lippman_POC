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
            link="/a-propos"
            activeClassName="active"
          />
        </li>
        <li className={styles.navItem}>
          <CustomLink
            label="Gabriel Lippmann"
            link="/gabriel-lippmann"
            activeClassName="active"
          />
        </li>
      </ul>
    </nav>
  )
}
