import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { artworkDetailClusterStyle } from './ArtworkDetailCluster.css';

interface ArtworkDetailClusterProps {
  children?: ReactNode;
}

export const ArtworkDetailCluster = ({
  children,
}: ArtworkDetailClusterProps) => {
  return (
    <Box as="dl" className={artworkDetailClusterStyle}>
      {children}
    </Box>
  );
};
