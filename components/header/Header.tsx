import React, { useState, useRef } from 'react'
import CustomLink from '../link/Link'
import styles from './Header.module.scss'
import ArrowSvg from '../arrow-svg/ArrowSvg'

export default function Header() {
  const refNav = useRef<HTMLElement>(null)

  const [leftArrowVisible, setLeftArrowVisible] = useState(false)

  const handleScrollRight = (): void => {
    if (refNav?.current) {
      refNav.current.scrollLeft += 100
      setLeftArrowVisible(true)
    }    
  }

  const handleScrollLeft = (): void => {
    if (refNav?.current) {
      const scrollLeft = refNav.current.scrollLeft
      refNav.current.scrollLeft -= 100

      // ScrollLeft = To know how many horizontal pixels the HTML element has for scroll
      if (scrollLeft === 0) {
        setLeftArrowVisible(false)
      }
    }
  }

  // For mobile only
  // if scrollLeft is 0 when the user doesn't touch the screen anymore
  // I delete the left arrow
  const handleToggleArrowOnTouchEvent = () => {
    if (refNav?.current) {
      const scrollLeft = refNav.current.scrollLeft
      if (scrollLeft === 0) {
        setLeftArrowVisible(false)
      } else {
        setLeftArrowVisible(true)
      }
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

          {leftArrowVisible && (
            <span className={styles.arrow} onClick={() => handleScrollLeft()}>
              <ArrowSvg direction="left" />
            </span>
          )}

          <nav
            ref={refNav}
            onTouchEnd={() => handleToggleArrowOnTouchEvent()}
            onTouchMove={() => handleToggleArrowOnTouchEvent()}
          >
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
                  link="/visual-content-map"
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

          <span className={styles.arrow} onClick={() => handleScrollRight()}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </>
  )
}
