import React, { ReactNode } from 'react';

import { Box, BoxProps } from '../Box';
import { overlayStyles } from './Overlay.css';

interface OverlayProps extends BoxProps {
  children?: ReactNode;
}

export const Overlay = (props: OverlayProps) => {
  return <Box className={overlayStyles} {...props} />;
};
