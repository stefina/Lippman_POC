import React, { ReactNode } from 'react';

import { Box } from '../Box';
import { contentWrapperStyles } from './ContentWrapper.css';

interface ContentWrapperProps {
  children?: ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <Box as="main" className={contentWrapperStyles}>
      {children}
    </Box>
  );
};
