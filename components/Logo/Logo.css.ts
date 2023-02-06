import { style } from '@vanilla-extract/css';
import { boxSprinkles } from '../Box/Box.css';

export const logoStyles = boxSprinkles({
  display: 'block',
  height: 'full',
});

export const logoPathStyles = style({
  fill: 'currentColor',
});
