import { createTextStyle } from '@capsizecss/vanilla-extract';
import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const headingLargeStyle = style({
  paddingBottom: vars.space[10],
  fontWeight: 900,
});

export const headingMediumStyle = style({
  paddingTop: vars.space[16],
  fontWeight: 900,
});

globalStyle(`.${headingLargeStyle} + .${headingMediumStyle}`, {
  paddingTop: 0,
});

export const headingLargeFontStyle = createTextStyle(
  vars.typography['heading-large']
);

export const headingMediumFontStyle = createTextStyle(
  vars.typography['heading-medium']
);
