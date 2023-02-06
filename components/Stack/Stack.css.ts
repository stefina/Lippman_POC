import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../../styles/theme.css';
import { globals } from '../Box/Box.css';

export const stackStyle = style({
  display: 'flex',
});

export const stackProperties = defineProperties({
  conditions: {
    default: {},
    md: { '@media': '(min-width: 768px)' },
  },
  defaultCondition: 'default',
  responsiveArray: ['default', 'md'],
  properties: {
    gap: { ...vars.space },
    alignItems: [
      ...globals,
      'flex-start',
      'center',
      'flex-end',
      'stretch',
      'baseline',
      'auto',
    ],
    justifyContent: [
      ...globals,
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    flexDirection: ['row', 'column'],
  },
});

export const stackSprinkles = createSprinkles(stackProperties);

export type StackSprinkles = Parameters<typeof stackSprinkles>[0];
