import { createTextStyle } from '@capsizecss/vanilla-extract';
import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { composeClassNames } from '../../utils/composeClassNames';

export type HeadingSize = 'small' | 'medium' | 'large';

export const headingLargeStyle = style({
  fontWeight: 700,
});

export const headingMediumStyle = style({
  fontWeight: 700,
});

export const headingLargeFontStyle = createTextStyle(
  vars.typography['heading-large']
);

export const headingMediumFontStyle = createTextStyle(
  vars.typography['heading-medium']
);

export const headingSmallFontStyle = createTextStyle(
  vars.typography['heading-small']
);

export const headingVariants: Record<HeadingSize, string | undefined> = {
  large: composeClassNames(headingLargeFontStyle, headingLargeStyle),
  medium: composeClassNames(headingMediumFontStyle, headingMediumStyle),
  small: headingSmallFontStyle,
};
