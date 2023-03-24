import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const navLinkStyle = style({
  padding: `${vars.space[1]} ${vars.space[2]}`,
  borderBottom: 'none',
  fontWeight: 700,
  color: vars.color.neutral[800],
  backgroundColor: 'transparent',
  transition: 'background-color 200ms ease-in-out',
  textDecoration: 'none',
  height: vars.space[6],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': { backgroundColor: vars.color.neutral[100], border: 'none' },
});
