import React, { ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { Box, BoxProps } from '../Box';
import { headingVariants } from './Heading.css';

interface HeadingProps extends BoxProps {
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

export function Heading({
  as = 'h1',
  className,
  size = 'large',
  ...rest
}: HeadingProps) {
  return (
    <Box
      {...rest}
      as={as}
      className={composeClassNames(className, headingVariants[size])}
    />
  );
}
