import React, { PropsWithChildren } from 'react'
import styles from './Link.module.scss'
import Link, { LinkProps } from 'next/link'

export const CustomLink = ({
  ...props
}: PropsWithChildren<Omit<LinkProps, 'className'>>) => {
  return (
    <Link {...props} className={styles.link} />
  )
}
