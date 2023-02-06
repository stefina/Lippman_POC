import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export type GridVariant = 'large' | 'small';

export const gridStyles = style({
  display: 'grid',
  gap: '1rem',
});

export const gridLargeStyles = style({
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(12rem, 100%), 1fr))',
});

export const gridSmallStyles = style({
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(6rem, 100%), 1fr))',
});

export const gridWithOverlayStyles = style({
  marginRight: vars.overlaySize,
});
