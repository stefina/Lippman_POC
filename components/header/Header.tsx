import useIntersectionObserver from '@react-hook/intersection-observer';
import useResizeObserver from '@react-hook/resize-observer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { RefObject, useEffect, useRef, useState } from 'react';

import { ActiveLink } from '../ActiveLink';
import ArrowSvg from '../arrow-svg/ArrowSvg';
import { Box } from '../Box';
import { HeaderSearch } from '../HeaderSearch';
import { headerSearchLabelStyle } from '../HeaderSearch/HeaderSearch.css';
import { Logo } from '../Logo/Logo';
import { Stack } from '../Stack';
import {
  headerLogoWrapperStyle,
  headerNavArrowButton,
  headerNavContainer,
  headerNavItem,
  headerNavLink,
  headerNavLinkActive,
  headerNavList,
} from './Header.css';

const useIsCutOff = (target: RefObject<HTMLElement>) => {
  const [isCutOff, setIsCutOff] = useState({
    isCutOff: false,
    width: 0,
  });

  useEffect(() => {
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
  const { query } = useRouter();
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
  const [isFullyScrolledLeft, setIsFullyScrolledLeft] = useState(false);
  const [isFullyScrolledRight, setIsFullyScrolledRight] = useState(false);

  return (
    <Stack as="header" flexDirection="column" gap={1}>
      <Stack
        justifyContent="flex-start"
        alignItems="flex-end"
        flexWrap="wrap"
        gap={1}
      >
        <Link href="/">
          <Box
            backgroundColor="white"
            color="black"
            flexShrink="0"
            className={headerLogoWrapperStyle}
          >
            <Logo />
          </Box>
        </Link>
        <HeaderSearch />
      </Stack>
      <Stack
        flexDirection="row"
        maxWidth="full"
        boxShadow="default"
        backgroundColor="white"
        overflow="hidden"
        className={headerNavContainer}
      >
        <Stack
          boxShadow={isFullyScrolledLeft ? 'default' : undefined}
          flexDirection="row"
          alignItems="center"
          position="relative"
          zIndex="generic1"
          transition="medium"
        >
          <Box
            as="span"
            paddingRight={navIsCutOff ? 0 : 1}
            className={headerSearchLabelStyle}
          >
            Viz:
          </Box>
          {navIsCutOff && (
            <Box
              as="button"
              aria-hidden
              height="full"
              onClick={() => {
                if (currentScrollLeft && refNav?.current) {
                  refNav.current.scrollBy(-1 * currentScrollLeft, 0);
                }
              }}
              className={headerNavArrowButton}
            >
              <ArrowSvg direction="left" />
            </Box>
          )}
        </Stack>
        <Stack
          as="nav"
          flexDirection="row"
          overflowX="auto"
          backgroundColor="white"
        >
          <Stack
            ref={refNav}
            as="ul"
            flexDirection="row"
            gap={1}
            scrollBehavior="smooth"
            paddingY={1}
            paddingX={0}
            className={headerNavList}
            onScroll={(e) => {
              if (e.currentTarget.scrollLeft) {
                setIsFullyScrolledLeft(true);
              } else {
                setIsFullyScrolledLeft(false);
              }
              if (
                Math.ceil(e.currentTarget.scrollLeft) + navWidth >=
                e.currentTarget.scrollWidth
              ) {
                setIsFullyScrolledRight(true);
              } else {
                setIsFullyScrolledRight(false);
              }
            }}
          >
            <Box as="li" ref={setRefFirstLink} className={headerNavItem}>
              <ActiveLink
                className={headerNavLink}
                activeClassName={headerNavLinkActive}
                href="/creation-timeline"
              >
                Creation Timeline
              </ActiveLink>
            </Box>
            <Box as="li" ref={setRefSecondLink} className={headerNavItem}>
              <ActiveLink
                className={headerNavLink}
                activeClassName={headerNavLinkActive}
                href="/visual-content-map"
              >
                Visual Content Map
              </ActiveLink>
            </Box>
            <Box as="li" ref={setRefThirdLink} className={headerNavItem}>
              <ActiveLink
                className={headerNavLink}
                activeClassName={headerNavLinkActive}
                href="/artwork-location-map"
              >
                Artwork Location Map
              </ActiveLink>
            </Box>
          </Stack>
        </Stack>
        {navIsCutOff && (
          <Box
            boxShadow={!isFullyScrolledRight ? 'default' : undefined}
            position="relative"
            zIndex="generic1"
          >
            <button
              aria-hidden
              onClick={() => {
                if (currentScrollRight && refNav?.current) {
                  refNav.current.scrollBy(currentScrollRight, 0);
                }
              }}
              className={headerNavArrowButton}
            >
              <ArrowSvg />
            </button>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}
