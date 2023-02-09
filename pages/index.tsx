import Link from 'next/link'
import type { InferGetStaticPropsType } from 'next'
import type { Artwork } from '../interfaces/artwork'

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data: Artwork = await res.json()
  return {
    props: {
      artworks: data.id,
    },
  }
}

export default function IndexPage({
  artworks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <p>Next.js has {artworks} ⭐️</p>
      <Link href="/preact-stars">How about preact?</Link>
    </>
  )
}