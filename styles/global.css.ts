import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  margin: 0,
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  // -moz-osx-font-smoothing: grayscale;
});

globalStyle('html', {
  fontSize: 'clamp(1rem, calc(0.93rem + 0.34vw), 1.25rem)',
});

globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

export const pseudoElementShadow = style({
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
});
