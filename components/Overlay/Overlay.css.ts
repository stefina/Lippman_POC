import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const overlayStyles = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  maxWidth: vars.overlaySize,
  background: '#e6e6e6',
});
