import React, { ReactNode, useContext } from 'react';
import styles from './DefaultLayout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import { composeClassNames } from '../utils/composeClassNames';
import { AppContext } from '../pages/_app';
import {
  layoutBackgroundImageStyle,
  layoutIsOverlayOpenStyle,
} from './DefaultLayout.css';
import Image from 'next/image';
import bg from './bg.jpg';
import { Box } from './Box';

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function DefaultLayout({
  className,
  children,
}: DefaultLayoutProps) {
  const {
    state: { isOverlayOpen },
  } = useContext(AppContext);

  return (
    <div
      className={composeClassNames(
        styles.pageWrapper,
        className,
        isOverlayOpen ? layoutIsOverlayOpenStyle : undefined
      )}
    >
      <Box position="relative" zIndex="generic1">
        <Header />
        {children}
        <Footer />
      </Box>
      <Image
        src={bg}
        alt=""
        fill
        className={layoutBackgroundImageStyle}
        placeholder="blur"
      ></Image>
    </div>
  );
}
