import React, { ReactNode } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { Box, BoxProps } from '../Box';
import { textFontStyle } from './Text.css';

interface TextProps extends BoxProps {
  children?: ReactNode;
}

export function Text({ as = 'p', className, ...rest }: TextProps) {
  return (
    <Box
      {...rest}
      as={as}
      className={composeClassNames(className, textFontStyle)}
    />
  );
}
