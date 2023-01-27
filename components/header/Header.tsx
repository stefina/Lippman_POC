import React, { useState, useRef, useEffect, RefObject } from 'react'
import CustomLink from '../link/Link'
import styles from './Header.module.scss'
import ArrowSvg from '../arrow-svg/ArrowSvg'

import useIntersectionObserver from '@react-hook/intersection-observer'
import useResizeObserver from '@react-hook/resize-observer'

const useIsCutOff = (target: RefObject<HTMLElement>) => {
  const [size, setSize] = React.useState(false)

  React.useLayoutEffect(() => {
    if (target.current) {
      setSize(target.current.scrollWidth > target.current.offsetWidth)
    }
  }, [target])

  useResizeObserver(target, (entry) => {
    setSize(entry.target.scrollWidth > entry.target.clientWidth)
  })
  return size
}

export default function Header() {
  const refNav = useRef<HTMLUListElement>(null)
  const navIsCutOff = useIsCutOff(refNav)
  const [refFirstLink, setRefFirstLink] = useState<HTMLElement | null>(null)
  const [refSecondLink, setRefSecondLink] = useState<HTMLElement | null>(null)
  const [refThirdLink, setRefThirdLink] = useState<HTMLElement | null>(null)
  const { isIntersecting: isIntersecting1 } = useIntersectionObserver(refFirstLink)
  const { isIntersecting: isIntersecting2 } = useIntersectionObserver(refSecondLink)
  const { isIntersecting: isIntersecting3 } = useIntersectionObserver(refThirdLink, {threshold: 1})
  const [currentScrollRight, setCurrentScrollRight] = useState(0)
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0)

  useEffect(() => {
    if (isIntersecting1 && refFirstLink) {
      setCurrentScrollRight(refFirstLink.clientWidth)
      setCurrentScrollLeft(0)
    }
    if (!isIntersecting1 && isIntersecting2 && refSecondLink && refFirstLink) {
      setCurrentScrollRight(refSecondLink.clientWidth)
      setCurrentScrollLeft(refFirstLink.clientWidth)
    }
    if (isIntersecting3 && refThirdLink && refNav.current) {
      setCurrentScrollRight(0)
      setCurrentScrollLeft(refNav.current.clientWidth - refThirdLink.clientWidth)
    }
  }, [isIntersecting1, isIntersecting2, isIntersecting3, refFirstLink, refSecondLink, refThirdLink])

  const handleScrollRight = (): void => {
    if (refNav?.current) {
      refNav.current.scrollLeft += 100
      // setLeftArrowVisible(true)
    }    
  }

  const handleScrollLeft = (): void => {
    if (refNav?.current) {
      const scrollLeft = refNav.current.scrollLeft
      refNav.current.scrollLeft -= 100

      // ScrollLeft = To know how many horizontal pixels the HTML element has for scroll
      // if (scrollLeft === 0) {
      //   setLeftArrowVisible(false)
      // }
    }
  }

  // For mobile only
  // if scrollLeft is 0 when the user doesn't touch the screen anymore
  // I delete the left arrow
  const handleToggleArrowOnTouchEvent = () => {
    if (refNav?.current) {
      const scrollLeft = refNav.current.scrollLeft
      // if (scrollLeft === 0) {
      //   setLeftArrowVisible(false)
      // } else {
      //   setLeftArrowVisible(true)
      // }
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

          {navIsCutOff && (<button
            aria-hidden
            onClick={() => {
              if (currentScrollLeft && refNav?.current) {
                refNav.current.scrollLeft -= currentScrollLeft
              }
            }}
            className={styles.arrow}
          >
            <ArrowSvg direction="left" />
          </button>)}

          <nav>
            <ul
              ref={refNav}
              onTouchEnd={() => handleToggleArrowOnTouchEvent()}
              onTouchMove={() => handleToggleArrowOnTouchEvent()}
              style={{ scrollSnapType: "inline", overflowX: 'auto' }}
            >
              <li ref={setRefFirstLink} style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
              }}>
                <CustomLink
                  label="Creation Timeline"
                  link="/creation-timeline"
                />
              </li>
              <li ref={setRefSecondLink} style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
              }}>
                <CustomLink
                  label="Visual Content Map"
                  link="/visual-content-map"
                />
              </li>
              <li ref={setRefThirdLink} style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "normal"
              }}>
                <CustomLink
                  label="Artwork Location Map"
                  link="/artwork-location-map"
                />
              </li>
            </ul>
          </nav>

          {navIsCutOff && (<button
            aria-hidden
            onClick={() => {
              if (currentScrollRight && refNav?.current) {
                refNav.current.scrollLeft += currentScrollRight
              }
            }}
            className={styles.arrow}
          >
            <ArrowSvg />
          </button>)}
        </div>
      </div>
    </>
  )
}
