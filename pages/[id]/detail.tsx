import { useRouter } from 'next/router';

export default function ArtworkDetailPage() {
  const { query } = useRouter();

  return <div>Artwork Detail – {query.id}</div>;
}
