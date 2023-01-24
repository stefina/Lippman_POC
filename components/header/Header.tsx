import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoAndSearchBarContainer}>
        <div className={styles.logo}>Bloc Elysee</div>
        <div className={styles.searchBar}>
          <input type="search" id="search-bar" name="search-bar" />
        </div>
      </div>

      <nav className={styles.nav}>
        <div>Nav</div>
      </nav>
    </div>
  )
}
