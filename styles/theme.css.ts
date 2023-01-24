import { createTheme } from '@vanilla-extract/css';

import { color } from './tokens/color';
import { space } from './tokens/space';

export const [themeClass, vars] = createTheme({
  color,
  space,
});
