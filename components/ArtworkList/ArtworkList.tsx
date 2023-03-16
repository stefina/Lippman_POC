import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { searchArtworks } from '../../utils/searchArtworks';
import { Artwork, ArtworkCard } from '../ArtworkCard';
import { Text } from '../Text';

interface ArtworkListProps {
  defaultArtworks: Artwork[];
}

export const ArtworkList = ({ defaultArtworks }: ArtworkListProps) => {
  const router = useRouter();
  const search =
    typeof router?.query?.search === 'string'
      ? router?.query?.search || ''
      : '';
  const [filteredArtworks, setFilteredArtworks] =
    useState<Artwork[]>(defaultArtworks);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      searchArtworks(search)
        .then((result) => setFilteredArtworks(result))
        .then(() => setIsLoading(false))
        .catch((err) => {
          console.error(err);
        });
    }
    if (!search) {
      setFilteredArtworks(defaultArtworks);
    }
  }, [defaultArtworks, search]);

  return (
    <>
      {isLoading && <Text color="white">No results found</Text>}
      {!isLoading &&
        filteredArtworks.length > 0 &&
        filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      {!isLoading && filteredArtworks.length === 0 && (
        <Text color="white">No results found</Text>
      )}
    </>
  );
};
