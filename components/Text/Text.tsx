import React, { ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { Box, BoxProps } from '../Box';
import { TextLeading, TextSize, textStyleMap } from './Text.css';

interface TextProps extends BoxProps {
  children?: ReactNode;
  leading?: TextLeading;
  size?: TextSize;
}

export function Text({
  as = 'p',
  size = 'default',
  leading = 'default',
  className,
  ...rest
}: TextProps) {
  return (
    <Box
      {...rest}
      as={as}
      className={composeClassNames(className, textStyleMap[size][leading])}
    />
  );
}
