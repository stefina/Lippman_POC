import { style } from '@vanilla-extract/css';
import { pseudoElementShadow } from '../../styles/global.css';
import { vars } from '../../styles/theme.css';

export const artworkLinkStyles = style([
  pseudoElementShadow,
  {
    color: vars.color.neutral[900],
    borderTop: `0.25rem solid ${vars.color.brand[400]}`,
    textDecoration: 'none',
    transition: 'transform 150ms ease',

    ':hover': {
      transform: 'translateY(-10px)',
    },
  },
]);

export const artworkTypeIconStyle = style({
  backgroundColor: vars.color.white,
  position: 'absolute',
  bottom: 0,
  width: vars.space[8],
  height: vars.space[8],
  paddingTop: vars.space[1],
  paddingRight: vars.space[1],
});

export const artworkTypeIconWrapperStyle = style({
  padding: vars.space[1],
  border: `1px solid ${vars.color.black}`,
});

export const artworkImageStyle = style({
  aspectRatio: '260 / 196',
  objectFit: 'cover',
});
