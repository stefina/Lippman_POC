import React, { ReactNode } from 'react';
import styles from './DefaultLayout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useRouter } from 'next/router';
import { composeClassNames } from '../utils/composeClassNames';

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function DefaultLayout({
  className,
  children,
}: DefaultLayoutProps) {
  return (
    <div className={composeClassNames(styles.pageWrapper, className)}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
