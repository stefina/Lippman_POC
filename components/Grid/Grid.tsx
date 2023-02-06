import { forwardRef } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';

import { Box, BoxProps } from '../Box';
import {
  gridLargeStyles,
  gridSmallStyles,
  gridStyles,
  GridVariant,
  gridWithOverlayStyles,
} from './Grid.css';

interface GridProps extends BoxProps {
  hasOverlay?: boolean;
  variant?: GridVariant;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ hasOverlay, variant = 'large', ...rest }, ref) => {
    return (
      <Box
        className={composeClassNames(
          gridStyles,
          variant === 'large' ? gridLargeStyles : gridSmallStyles,
          hasOverlay ? gridWithOverlayStyles : undefined
        )}
        {...rest}
        ref={ref}
      />
    );
  }
);
