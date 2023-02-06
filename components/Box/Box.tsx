import React, {
  AllHTMLAttributes,
  createElement,
  forwardRef,
  ReactNode,
} from 'react';

import { composeClassNames } from '../../utils/composeClassNames';
import { extractAtomsFromProps } from '../../utils/extractAtomsFromProps';
import { BoxSprinkles, boxSprinkles } from './Box.css';

type HTMLProperties = Omit<
  AllHTMLAttributes<HTMLElement>,
  'as' | 'color' | 'height' | 'width' | 'wrap' | 'size'
>;

type BoxSpecificProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

export type BoxProps = BoxSpecificProps & BoxSprinkles & HTMLProperties;

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: element = 'div', children, className, ...rest }: BoxProps, ref) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, [
      boxSprinkles,
    ]);

    return createElement(
      element,
      {
        ref,
        ...otherProps,
        className: composeClassNames(boxSprinkles(atomProps), className),
      },
      children
    );
  }
);
