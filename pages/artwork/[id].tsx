import { useRouter } from 'next/router';
import useSWR from 'swr';
import type { Artwork, ResponseError } from '../../interfaces/artwork';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function ArtworkPage() {
  const { query } = useRouter();
  const { data, error, isLoading, isValidating } = useSWR<
    Artwork,
    ResponseError
  >(() => (query.id ? `/api/artworks/${query.id}` : null), fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {isValidating ? (
            <td colSpan={2} align="center">
              Validating...
            </td>
          ) : (
            <>
              <td>{data.name}</td>
              <td>{data.id}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
}