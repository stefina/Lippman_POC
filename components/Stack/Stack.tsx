import React, { forwardRef, ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';

import { Box, BoxProps } from '../Box';
import { stackStyle, StackSprinkles, stackSprinkles } from './Stack.css';

export type StackProps = {
  children?: ReactNode;
  className?: string;
} & StackSprinkles &
  BoxProps;

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      gap,
      alignItems,
      flexDirection = 'column',
      justifyContent,
      flexWrap,
      className,
      ...rest
    }: StackProps,
    ref
  ) => {
    return (
      <Box
        className={composeClassNames(
          className,
          stackStyle,
          stackSprinkles({
            gap,
            alignItems,
            flexDirection,
            justifyContent,
            flexWrap,
          })
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
