import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { IconChevronRight } from '../Icons/IconChevronRight';
import { CustomLink } from '../link/Link';
import { Stack } from '../Stack';
import { breadcrumbListStyle } from './Breadcrumbs.css';

interface BreadcrumbProps {
  children: ReactNode;
}

export const Breadcrumbs = ({ children }: BreadcrumbProps) => {
  return (
    <Box
      aria-label="Breadcrumb"
      as="nav"
      backgroundColor="white"
      boxShadow="default"
      padding={1}
    >
      <Stack as="ol" alignItems="center" className={breadcrumbListStyle}>
        {children}
      </Stack>
    </Box>
  );
};
