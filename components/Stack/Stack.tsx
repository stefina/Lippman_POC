import React, { forwardRef, ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { extractAtomsFromProps } from '../../utils/extractAtomsFromProps';

import { Box, BoxProps } from '../Box';
import { stackStyle, StackSprinkles, stackSprinkles } from './Stack.css';

export type StackProps = {
  children?: ReactNode;
  className?: string;
} & StackSprinkles &
  BoxProps;

export const extractStackAtomsFromProps = (props: any) =>
  extractAtomsFromProps(props, [stackSprinkles]);

export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ className, ...rest }: StackProps, ref) => {
    const { atomProps, otherProps } = extractStackAtomsFromProps(rest);

    return (
      <Box
        className={composeClassNames(
          className,
          stackStyle,
          stackSprinkles(atomProps)
        )}
        ref={ref}
        {...otherProps}
      />
    );
  }
);
