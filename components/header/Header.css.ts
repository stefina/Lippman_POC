import { style } from '@vanilla-extract/css';
import { pseudoElementShadow } from '../../styles/global.css';
import { vars } from '../../styles/theme.css';

export const headerLogoWrapperStyle = style([
  pseudoElementShadow,
  {
    height: vars.space[14],
  },
]);

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
