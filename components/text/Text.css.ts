import { createTextStyle } from '@capsizecss/vanilla-extract';
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const textStyle = style({
  margin: `${vars.space[4]} 0 0`,
});

export const textFontStyle = createTextStyle(vars.typography['copy-default']);
