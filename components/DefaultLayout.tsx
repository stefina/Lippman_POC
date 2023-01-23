import React from 'react'
import styles from './DefaultLayout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

export default function DefaultLayout(props: any) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}
