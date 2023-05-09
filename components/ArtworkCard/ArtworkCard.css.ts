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
  width: vars.space[6],
  height: vars.space[6],
  paddingTop: '0.125rem',
  paddingRight: '0.125rem',
});

export const artworkTypeIconWrapperStyle = style({
  padding: '0.125rem',
  border: `1px solid ${vars.color.black}`,
});

export const artworkImageStyle = style({
  backgroundColor: vars.color.neutral[100],
  aspectRatio: '260 / 196',
  objectFit: 'cover',
});

export const artworkTextWrapperStyle = style({
  height: '3.25rem',
});

export const artworkHeadingStyle = style({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});
