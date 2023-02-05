import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('img', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

/* Set core root defaults */
globalStyle('html:focus-within', {
  scrollBehavior: 'smooth',
});
// globalStyle('body', {
//   scrollBehavior: 'smooth',
// });
