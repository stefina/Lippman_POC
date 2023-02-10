import React, { ReactNode, useContext } from 'react';
import styles from './DefaultLayout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useRouter } from 'next/router';
import { composeClassNames } from '../utils/composeClassNames';
import { AppContext } from '../pages/_app';
import { layoutIsOverlayOpenStyle } from './DefaultLayout.css';

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
      <Header />
      {children}
      <Footer />
    </div>
  );
}
