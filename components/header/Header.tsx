import React, {
  useState,
  useRef,
  useEffect,
  RefObject,
  useLayoutEffect,
} from 'react';
import styles from './Header.module.scss';
import ArrowSvg from '../arrow-svg/ArrowSvg';

import useIntersectionObserver from '@react-hook/intersection-observer';
import useResizeObserver from '@react-hook/resize-observer';
import { ActiveLink } from '../ActiveLink';

const useIsCutOff = (target: RefObject<HTMLElement>) => {
  const [isCutOff, setIsCutOff] = useState({ isCutOff: false, width: 0 });

  useLayoutEffect(() => {
    if (target.current) {
      setIsCutOff({
        isCutOff: target.current.scrollWidth > target.current.clientWidth,
        width: target.current.clientWidth,
      });
    }
  }, [target]);

  useResizeObserver(target, (entry) => {
    setIsCutOff({
      isCutOff: entry.target.scrollWidth > entry.target.clientWidth,
      width: entry.target.clientWidth,
    });
  });
  return isCutOff;
};

export default function Header() {
  const refNav = useRef<HTMLUListElement>(null);
  const { isCutOff: navIsCutOff, width: navWidth } = useIsCutOff(refNav);
  const [refFirstLink, setRefFirstLink] = useState<HTMLElement | null>(null);
  const [refSecondLink, setRefSecondLink] = useState<HTMLElement | null>(null);
  const [refThirdLink, setRefThirdLink] = useState<HTMLElement | null>(null);
  const { isIntersecting: isIntersecting1 } =
    useIntersectionObserver(refFirstLink);
  const { isIntersecting: isIntersecting2 } =
    useIntersectionObserver(refSecondLink);
  const { isIntersecting: isIntersecting3 } = useIntersectionObserver(
    refThirdLink,
    { threshold: 1 }
  );
  const [currentScrollRight, setCurrentScrollRight] = useState(0);
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);

  useEffect(() => {
    if (isIntersecting3 && refThirdLink && navWidth) {
      setCurrentScrollRight(0);
      setCurrentScrollLeft(navWidth - refThirdLink.clientWidth);
    } else if (
      !isIntersecting1 &&
      isIntersecting2 &&
      refSecondLink &&
      refFirstLink
    ) {
      setCurrentScrollRight(refSecondLink.clientWidth);
      setCurrentScrollLeft(refFirstLink.clientWidth);
    } else if (isIntersecting1 && refFirstLink) {
      setCurrentScrollRight(refFirstLink.clientWidth);
      setCurrentScrollLeft(0);
    }
  }, [
    isIntersecting1,
    isIntersecting2,
    isIntersecting3,
    refFirstLink,
    refSecondLink,
    refThirdLink,
    navWidth,
  ]);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoAndSearchBarContainer}>
          <div className={styles.logo}>
            <img src="./icons/logo.svg" width="" alt="" />
          </div>

          <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
              <label htmlFor="search-bar" className={styles.label}>
                Search
              </label>
              <input
                className={styles.input}
                type="search"
                id="search-bar"
                name="search-bar"
              />
            </div>
          </div>
        </div>
        <div className={styles.navContainer}>
          <span className={styles.viz}>Viz: </span>

          {navIsCutOff && (
            <button
              aria-hidden
              onClick={() => {
                if (currentScrollLeft && refNav?.current) {
                  refNav.current.scrollBy(-1 * currentScrollLeft, 0);
                }
              }}
              className={styles.arrow}
            >
              <ArrowSvg direction="left" />
            </button>
          )}

          <nav className={styles.nav}>
            <ul
              className={styles.ul}
              ref={refNav}
              style={{ scrollSnapType: 'inline', overflowX: 'auto' }}
            >
              <li
                className={styles.li}
                ref={setRefFirstLink}
                style={{
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'normal',
                }}
              >
                <ActiveLink
                  activeClassName={styles.active}
                  href="/creation-timeline"
                >
                  Creation Timeline
                </ActiveLink>
              </li>
              <li
                className={styles.li}
                ref={setRefSecondLink}
                style={{
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'normal',
                }}
              >
                <ActiveLink
                  activeClassName={styles.active}
                  href="/visual-content-map"
                >
                  Visual Content Map
                </ActiveLink>
              </li>
              <li
                className={styles.li}
                ref={setRefThirdLink}
                style={{
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'normal',
                }}
              >
                <ActiveLink
                  activeClassName={styles.active}
                  href="/artwork-location-map"
                >
                  Artwork Location Map
                </ActiveLink>
              </li>
            </ul>
          </nav>

          {navIsCutOff && (
            <button
              aria-hidden
              onClick={() => {
                if (currentScrollRight && refNav?.current) {
                  refNav.current.scrollBy(currentScrollRight, 0);
                }
              }}
              className={styles.arrow}
            >
              <ArrowSvg />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
