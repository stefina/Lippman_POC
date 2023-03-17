import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const INPUT_WIDTH = '13rem';

export const headerSearchLabelStyle = style({
  paddingLeft: vars.space[2],
  color: vars.color.neutral[500],
  fontWeight: 900,
  textTransform: 'uppercase',
});

export const headerSearchInputWrapperStyle = style({
  width: INPUT_WIDTH,
});

export const headerSearchInputStyle = style({
  padding: vars.space[1],
  height: vars.space[6],
  border: 'none',
  background: 'none',
  appearance: 'none',
  // all: 'unset' // can be uncommented once we have custom focus styles
});

export const headerSearchIconWrapperStyle = style({
  width: vars.space[6],
  height: vars.space[6],
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: vars.color.neutral[700],
  transition: 'color 200ms ease',

  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: vars.color.black,
      },
    },
  },
});
