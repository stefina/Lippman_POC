import { forwardRef } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';

import { Box, BoxProps } from '../Box';
import { gridStyles, gridWithOverlayStyles } from './Grid.css';

interface GridProps extends BoxProps {
  hasOverlay?: boolean;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ hasOverlay, ...rest }, ref) => {
    return (
      <Box
        className={composeClassNames(
          gridStyles,
          hasOverlay ? gridWithOverlayStyles : undefined
        )}
        {...rest}
        ref={ref}
      />
    );
  }
);
