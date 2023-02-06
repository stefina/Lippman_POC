import { precomputeValues } from '@capsizecss/vanilla-extract';
import { createTheme } from '@vanilla-extract/css';
import { getResponsiveFontStyles } from '../utils/getResponsiveFontStyles';

import { color } from './tokens/color';
import { space } from './tokens/space';

// fromFile('../pages/fonts/PhotoElysee-Regular.woff2')
// returns a promise
const photoElyseeMetrics = {
  ascent: 835, // file says 965,
  capHeight: 705, // file says 730,
  descent: -210, // file says -235,
  lineGap: 0,
  unitsPerEm: 1000,
};

export const [themeClass, vars] = createTheme({
  color,
  space,
  overlaySize: '40rem',
  contentWidth: '37rem',
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
  typography: {
    'heading-large': getResponsiveFontStyles(
      precomputeValues({
        capHeight: 30,
        leading: 30,
        fontMetrics: photoElyseeMetrics,
      })
    ),
    'heading-medium': getResponsiveFontStyles(
      precomputeValues({
        capHeight: 18,
        leading: 22,
        fontMetrics: photoElyseeMetrics,
      })
    ),
    'heading-small': getResponsiveFontStyles(
      precomputeValues({
        capHeight: 12,
        leading: 22,
        fontMetrics: photoElyseeMetrics,
      })
    ),
    'copy-default': getResponsiveFontStyles(
      precomputeValues({
        capHeight: 12,
        leading: 22,
        fontMetrics: photoElyseeMetrics,
      })
    ),
  },
});
