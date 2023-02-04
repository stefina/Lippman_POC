import { ComputedValues } from '@capsizecss/vanilla-extract/dist/declarations/src/types';

export const getResponsiveFontStyles = (
  values: ComputedValues,
  actualPxPerRem: number = 16
): ComputedValues => {
  return {
    fontSize: `${parseFloat(values.fontSize) / actualPxPerRem}rem`,
    lineHeight: `${parseInt(values.lineHeight) / actualPxPerRem}rem`,
    baselineTrim: values.baselineTrim,
    capHeightTrim: values.capHeightTrim,
  };
};
