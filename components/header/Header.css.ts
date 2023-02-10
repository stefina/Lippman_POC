import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const headerLogoWrapperStyle = style([
  {
    height: vars.space[14],
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

const INPUT_WIDTH = '13rem';

export const headerSearchInputWrapperStyle = style({
  width: INPUT_WIDTH,
});

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

export const headerLabelStyle = style({
  paddingLeft: vars.space[2],
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

  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: vars.color.neutral[900],
      },
    },
  },
});

export const headerNavList = style({
  scrollSnapType: 'inline',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  listStyleType: 'none',
});

export const headerNavItem = style({
  scrollSnapAlign: 'start',
  scrollSnapStop: 'normal',
});

export const headerNavLink = style({
  color: vars.color.neutral[800],
  fontWeight: 700,
  textTransform: 'uppercase',
  textDecoration: 'none',
  backgroundColor: vars.color.neutral[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: vars.space[6],
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  transition: 'background-color 300ms ease-in-out',

  selectors: {
    [`${headerNavItem}:first-child &`]: {
      marginLeft: vars.space[1],
    },
    [`${headerNavItem}:last-child &`]: {
      marginRight: vars.space[1],
    },
  },

  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: vars.color.neutral[200],
      },
    },
  },
});

export const headerNavLinkActive = style({
  backgroundColor: vars.color.neutral[200],
});
