import { style } from '@vanilla-extract/css';

export const gridStyles = style({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
  padding: '2rem',
});
