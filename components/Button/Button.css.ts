import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const buttonStyle = style({
  textDecoration: 'none',
  boxShadow: 'none',
  border: 'none',
  color: vars.color.neutral[900],
  backgroundColor: vars.color.neutral[100],
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: vars.space[10],
  fontWeight: 700,
  transition: '200ms all ease',

  ':hover': {
    backgroundColor: vars.color.brand[100],
    color: vars.color.brand[900],
  },
});
