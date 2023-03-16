import { style } from '@vanilla-extract/css';

export type GridVariant = 'large' | 'small';

export const gridStyles = style({
  display: 'grid',
  gap: '1rem',
  transition: 'all 300ms ease',
  maxWidth: '89rem',
});

export const gridLargeStyles = style({
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(14rem, 100%), 1fr))',
});

export const gridSmallStyles = style({
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(10rem, 100%), 1fr))',
});
