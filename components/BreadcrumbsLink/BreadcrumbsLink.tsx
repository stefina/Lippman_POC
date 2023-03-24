import { ReactNode } from 'react';
import { IconChevronRight } from '../Icons/IconChevronRight';
import { Stack } from '../Stack';

interface BreadcrumbsLinkProps {
  children: ReactNode;
  first?: boolean;
}

export const BreadcrumbsLink = ({ children, first }: BreadcrumbsLinkProps) => {
  return (
    <Stack as="li" alignItems="center">
      {!first && <IconChevronRight aria-hidden size={5} />}
      {children}
    </Stack>
  );
};
