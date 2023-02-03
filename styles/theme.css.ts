import { createTheme } from '@vanilla-extract/css';

import { color } from './tokens/color';
import { space } from './tokens/space';

export const [themeClass, vars] = createTheme({
  color,
  space,
  shadows: {
    default:
      '0px 47px 98px rgba(0, 0, 0, 0.0671069), 0px 23.5229px 49.0479px rgba(0, 0, 0, 0.0975551), 0px 14.1691px 29.5441px rgba(0, 0, 0, 0.120149), 0px 9.08032px 18.9334px rgba(0, 0, 0, 0.14), 0px 5.88513px 12.2711px rgba(0, 0, 0, 0.159851), 0px 3.70462px 7.72453px rgba(0, 0, 0, 0.182445), 0px 2.12854px 4.43822px rgba(0, 0, 0, 0.212893), 0px 0.936824px 1.95338px rgba(0, 0, 0, 0.28)',
    inset: `
      inset 5em 1em gold;
    `,
    insetRight: `
      inset -5em 1em gold;
    `,
  },
});
