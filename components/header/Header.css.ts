import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { space } from '../../styles/tokens/space';
import { boxSprinkles } from '../Box/Box.css';

export const headerLogoWrapperStyle = style([
  {
    height: vars.space[12],
    position: 'relative',
    ':before': {
      content: '',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: '-1',
      boxShadow: vars.shadows.default,
    },
  },
]);

export const headerSearchInputStyle = style({
  padding: vars.space[1],
  height: vars.space[6],
  border: 'none',
  background: 'none',
  appearance: 'none',
  color: vars.color.white,
  // all: 'unset' // only delete once we have custom focus styles
});

export const headerSearchIconWrapperStyle = style({
  width: vars.space[6],
  height: vars.space[6],
});

export const headerLabelStyle = style({
  padding: `0 ${vars.space[2]}`,
  color: vars.color.neutral[500],
  fontWeight: 900,
  textTransform: 'uppercase',
});

export const headerNavContainer = style({
  width: 'max-content',
});

export const headerNavArrowButton = style({
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.neutral[500],
  cursor: 'pointer',
  height: vars.space[8],
  width: vars.space[8],
  position: 'relative',
  zIndex: '2',
  padding: 0,

  ':hover': {
    color: vars.color.neutral[900],
  },
});
