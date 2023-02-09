import Link from 'next/link'
import { Artwork } from '../interfaces/artwork'

type ArtworkProps = {
    artwork: Artwork
  }

export default function ArtworkComponent({ artwork }: ArtworkProps) {
    return (
      <li>
        <Link href="/artwork/[id]" as={`/artwork/${artwork.id}`}>
          {artwork.name}
        </Link>
      </li>
    )
}