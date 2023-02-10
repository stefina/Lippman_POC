import { forwardRef } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';

import { Box, BoxProps } from '../Box';
import {
  gridLargeStyles,
  gridSmallStyles,
  gridStyles,
  GridVariant,
} from './Grid.css';

interface GridProps extends BoxProps {
  variant?: GridVariant;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ variant = 'large', ...rest }, ref) => {
    return (
      <Box
        className={composeClassNames(
          gridStyles,
          variant === 'large' ? gridLargeStyles : gridSmallStyles
        )}
        {...rest}
        ref={ref}
      />
    );
  }
);
