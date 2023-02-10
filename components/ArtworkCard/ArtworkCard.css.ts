import { style } from '@vanilla-extract/css';
import { pseudoElementShadow } from '../../styles/global.css';
import { vars } from '../../styles/theme.css';

export const artworkLinkStyles = style([
  pseudoElementShadow,
  {
    color: vars.color.neutral[900],
    textDecoration: 'none',
    transition: 'transform 150ms ease',

    ':hover': {
      transform: 'translateY(-10px)',
    },
  },
]);
