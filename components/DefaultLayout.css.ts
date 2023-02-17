import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const layoutIsOverlayOpenStyle = style({
  marginRight: vars.overlaySize,
});

export const layoutBackgroundImageStyle = style({
  zIndex: -1,
  objectFit: 'cover',
  transition: 'all 200ms ease',
});
