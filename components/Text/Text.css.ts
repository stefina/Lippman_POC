import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '../../styles/theme.css';

export type TextSize = 'small' | 'default';

export type TextLeading = 'narrow' | 'default';

export const textStyleDefaultDefault = createTextStyle(
  vars.typography['copy-default-default']
);

export const textStyleDefaultNarrow = createTextStyle(
  vars.typography['copy-default-narrow']
);

export const textStyleSmallDefault = createTextStyle(
  vars.typography['copy-small-default']
);

export const textStyleSmallNarrow = createTextStyle(
  vars.typography['copy-small-narrow']
);

export const textStyleMap: Record<TextSize, Record<TextLeading, string>> = {
  small: {
    default: textStyleSmallDefault,
    narrow: textStyleSmallNarrow,
  },
  default: {
    default: textStyleDefaultDefault,
    narrow: textStyleDefaultNarrow,
  },
};
