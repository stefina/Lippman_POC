import { forwardRef } from 'react';

import { Box, BoxProps } from '../Box';
import { gridStyles } from './Grid.css';

export const Grid = forwardRef<HTMLElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <Box className={gridStyles} {...props} ref={ref} />;
  }
);
