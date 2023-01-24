import React, { ReactNode } from 'react';

import { Box } from '../Box';
import { overlayStyles } from './Overlay.css';

interface OverlayProps {
  children?: ReactNode;
}

export const Overlay = ({ children }: OverlayProps) => {
  return <Box className={overlayStyles}>{children}</Box>;
};
