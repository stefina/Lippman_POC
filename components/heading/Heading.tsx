import React from 'react'
import styles from './Heading.module.scss'

export default function Heading(props: any) {
  const { size } = props

  return size === 'large' ? (
    <h1 className={styles.headingLarge}>{props.children}</h1>
  ) : (
    <h2 className={styles.headingMedium}>{props.children}</h2>
  )
}
