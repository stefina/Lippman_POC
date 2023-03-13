import React, { ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { Box, BoxProps } from '../Box';
import { HeadingLeading, HeadingSize, headingVariants } from './Heading.css';

interface HeadingProps extends BoxProps {
  children?: ReactNode;
  leading?: HeadingLeading;
  size?: HeadingSize;
}

export function Heading({
  as = 'h1',
  className,
  leading = 'default',
  size = 'large',
  ...rest
}: HeadingProps) {
  return (
    <Box
      {...rest}
      as={as}
      className={composeClassNames(className, headingVariants[size][leading])}
    />
  );
}
