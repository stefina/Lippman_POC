import { createTextStyle } from '@capsizecss/vanilla-extract';
import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { composeClassNames } from '../../utils/composeClassNames';

export type HeadingSize = 'small' | 'medium' | 'large';

export type HeadingLeading = 'narrow' | 'default';

export const headingStyle = style({
  fontWeight: 700,
});

export const headingLargeFontStyle = createTextStyle(
  vars.typography['heading-large']
);

export const headingMediumFontStyle = createTextStyle(
  vars.typography['heading-medium']
);

export const headingSmallFontDefaultStyle = createTextStyle(
  vars.typography['heading-small-default']
);

export const headingSmallFontNarrowStyle = createTextStyle(
  vars.typography['heading-small-narrow']
);

export const headingVariants: Record<
  HeadingSize,
  Record<HeadingLeading, string | undefined>
> = {
  large: {
    default: composeClassNames(headingLargeFontStyle, headingStyle),
    narrow: composeClassNames(headingLargeFontStyle, headingStyle),
  },
  medium: {
    default: composeClassNames(headingMediumFontStyle, headingStyle),
    narrow: composeClassNames(headingMediumFontStyle, headingStyle),
  },
  small: {
    default: composeClassNames(headingSmallFontDefaultStyle, headingStyle),
    narrow: composeClassNames(headingSmallFontNarrowStyle, headingStyle),
  },
};
