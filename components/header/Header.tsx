import React from 'react'
import CustomLink from '../link/Link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        {/* LOGO & SEARCH */}
        <div className={styles.logoAndSearchBarContainer}>
          <div className={styles.logo}>
            <img src="./icons/logo.svg" width="" alt="" />
          </div>

          <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
              <label for="search-bar" className={styles.label}>
                SEARCH:
              </label>
              <input type="search" id="search-bar" name="search-bar" />
            </div>
          </div>
        </div>
        {/* NAV */}
        <div className={styles.navContainer}>
          {/* <div className={styles.nav}> */}
          <nav>
            <span className={styles.viz}>VIZ: </span>
            <ul>
              <li>
                <CustomLink
                  label="Creation Timeline"
                  link="/creation-timeline"
                />
              </li>
              <li>
                <CustomLink
                  label="Visual Content Map"
                  link="/visual-content-mag"
                />
              </li>
              <li>
                <CustomLink
                  label="Artwork Location Map"
                  link="/artwork-location-map"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
