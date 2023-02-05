import { globalStyle } from '@vanilla-extract/css';

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
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});
