import { style } from '@vanilla-extract/css';
import { pseudoElementShadow } from '../../styles/global.css';
import { vars } from '../../styles/theme.css';

export const articleDetailCloseStyle = style({
  width: vars.space[10],
  height: vars.space[10],
  padding: vars.space[2],
  position: 'absolute',
  top: vars.space[4],
  left: '-2rem',
  border: 'none',
  backgroundColor: vars.color.white,
  color: vars.color.neutral[900],
});
