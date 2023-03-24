import { style } from '@vanilla-extract/css';
import { boxSprinkles } from '../Box/Box.css';
import { stackSprinkles } from '../Stack/Stack.css';

export const breadcrumbListStyle = style([
  boxSprinkles({ padding: 0 }),
  {
    listStyle: 'none',
  },
]);
