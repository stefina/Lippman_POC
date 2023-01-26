import React, { useState, useRef } from 'react'
import CustomLink from '../link/Link'
import styles from './Header.module.scss'
import ArrowSvg from '../arrow-svg/ArrowSvg'

export default function Header() {
  const refFirstLink = useRef<HTMLInputElement>()
  const refSecondLink = useRef<HTMLInputElement>()
  const refThirdLink = useRef<HTMLInputElement>()
  const refNav = useRef<HTMLInputElement>()

  const [arrowLeftVisible, setArrowLeftVisible] = useState(false)

  const handleScrollRight = (): void => {
    setArrowLeftVisible(true)
    refNav.current.scrollLeft += 200
  }

  const handleScrollLeft = (): void => {
    refNav.current.scrollLeft -= 200

    const scrollLeft = refNav.current.scrollLeft

    // ScrollLeft = To know how many horizontal pixels the HTML element has for scroll
    if (scrollLeft === 0) {
      setArrowLeftVisible(false)
    }
  }

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
              <label htmlFor="search-bar" className={styles.label}>
                SEARCH:
              </label>
              <input type="search" id="search-bar" name="search-bar" />
            </div>
          </div>
        </div>
        {/* NAV */}
        <div className={styles.navContainer}>
          <span className={styles.viz}>VIZ: </span>
          {arrowLeftVisible && (
            <span className={styles.arrow} onClick={() => handleScrollLeft()}>
              <ArrowSvg direction="left" />
            </span>
          )}
          <nav ref={refNav}>
            <ul>
              <li ref={refFirstLink}>
                <CustomLink
                  label="Creation Timeline"
                  link="/creation-timeline"
                />
              </li>
              <li ref={refSecondLink}>
                <CustomLink
                  label="Visual Content Map"
                  link="/visual-content-map"
                />
              </li>
              <li ref={refThirdLink}>
                <CustomLink
                  label="Artwork Location Map"
                  link="/artwork-location-map"
                />
              </li>
            </ul>
          </nav>
          <span className={styles.arrow} onClick={() => handleScrollRight()}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </>
  )
}
