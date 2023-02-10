import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../../styles/theme.css';
import { neutralColor, brandColor } from '../../styles/tokens/color';

export const iconStyle = style({
  fill: 'currentcolor',
  flexShrink: 0,
});

const iconPropertiesResponsive = defineProperties({
  conditions: {
    default: {},
    md: { '@media': '(min-width: 768px)' },
  },
  defaultCondition: 'default',
  responsiveArray: ['default', 'md'],
  properties: {
    height: {
      ...vars.space,
      full: '100%',
    },
    width: { ...vars.space, full: '100%' },
    color: {
      white: vars.color.white,
      black: vars.color.black,
      transparent: vars.color.transparent,
      ...neutralColor,
      ...brandColor,
    },
  },
  shorthands: {
    size: ['width', 'height'],
  },
});

export const iconSprinkles = createSprinkles(iconPropertiesResponsive);

export type IconSprinkles = Parameters<typeof iconSprinkles>[0];
