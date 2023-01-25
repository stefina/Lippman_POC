import React, { PropsWithChildren, useState, useEffect } from 'react'
import styles from './Link.module.scss'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

// LinkProps ?
type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName?: string
  label: string
  link: string
}

// Ceux que je veux
// C'est active style pour les liens du footer

const CustomLink = ({
  label,
  link,
  activeClassName,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  // asPath, isReady come from router object
  // router object is returned by useRouter
  // asPath = string - contains the path we are currently on
  // isReady = boolean - Whether the router fields are updated client-side and ready for use
  const { asPath, isReady } = useRouter()

  const className = `${styles.link}`
  const [computedClassName, setComputedClassName] = useState(className)
  console.log('computedClassName', computedClassName)

  useEffect(() => {
    // Check if the router fields are updated client-side
    // What does it mean ?
    if (isReady) {
      // All the available path in the app
      // URL().pathname = to remove query and hash
      const linkPathname = new URL(link as string, location.href).pathname

      // New URL created with the path from the browser (where I clicked)
      const activePathname = new URL(asPath, location.href).pathname

      // If one of the linkPathname is strictly EQUAL to activePathname
      const newClassName =
        linkPathname === activePathname
          ? `${styles.link} ${styles.active}`
          : `${styles.link}`

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
        console.log('DIFFERENT')
      }
    }
  }, [
    asPath,
    isReady,
    // props.as,
    // props.href,
    // activeClassName,
    className,
    computedClassName,
  ])

  return (
    <Link href={link} className={computedClassName}>
      {label}
    </Link>
  )
}

export default CustomLink
