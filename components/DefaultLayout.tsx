import React, { ReactNode } from 'react';
import styles from './DefaultLayout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function DefaultLayout({
  className,
  children,
}: DefaultLayoutProps) {
  return (
    <div className={[styles.pageWrapper, className].join(' ')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
