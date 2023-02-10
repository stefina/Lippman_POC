import React, { forwardRef } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { extractAtomsFromProps } from '../../utils/extractAtomsFromProps';
import { Box, BoxProps, extractBoxAtomsFromProps } from '../Box';
import { BoxSprinkles, boxSprinkles } from '../Box/Box.css';
import { extractStackAtomsFromProps, Stack, StackProps } from '../Stack';
import { StackSprinkles, stackSprinkles, stackStyle } from '../Stack/Stack.css';

export type LayoutComponentName = 'box' | 'stack';

export interface LayoutComponentConsumer {
  asLayout?: LayoutComponentName;
}

export type LayoutComponentProps =
  | (LayoutComponentConsumer & BoxProps)
  | (LayoutComponentConsumer & StackProps);

export const getLayoutComponentStyle = (
  asLayout: LayoutComponentName,
  sprinkles: StackSprinkles | BoxSprinkles
) => {
  switch (asLayout) {
    case 'stack':
      const { atomProps: boxProps } = extractBoxAtomsFromProps(sprinkles);
      const { atomProps: stackProps } = extractStackAtomsFromProps(sprinkles);
      return composeClassNames(
        stackStyle,
        stackSprinkles(stackProps),
        boxSprinkles(boxProps)
      );
    case 'box':
    default:
      return boxSprinkles(sprinkles as BoxSprinkles);
  }
};

export const extractLayoutAtomsFromProps = (props: any) =>
  extractAtomsFromProps(props, [boxSprinkles, stackSprinkles]);

export const LayoutComponent = forwardRef<HTMLElement, LayoutComponentProps>(
  ({ asLayout = 'box', ...rest }, ref) => {
    switch (asLayout) {
      case 'stack':
        return <Stack {...rest} ref={ref} />;
      case 'box':
      default:
        return <Box {...rest} ref={ref} />;
    }
  }
);
