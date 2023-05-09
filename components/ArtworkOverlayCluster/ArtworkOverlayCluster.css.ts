import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const artworkDetailClusterStyle = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(auto, max-content) auto',
  rowGap: vars.space[5],
  columnGap: vars.space[5],
});
