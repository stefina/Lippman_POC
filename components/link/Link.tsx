import React from 'react'
import styles from './Link.module.scss'
import Link from 'next/link'

export default function CustomLink(props: any) {
  const { label, link } = props

  return (
    <Link href={link} className={styles.link}>
      {label}
    </Link>
  )
}
