import React, {
  AllHTMLAttributes,
  createElement,
  forwardRef,
  ReactNode,
} from 'react';

type HTMLProperties = Omit<
  AllHTMLAttributes<HTMLElement>,
  'as' | 'color' | 'height' | 'width' | 'wrap' | 'size'
>;

type BoxSpecificProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

export type BoxProps = BoxSpecificProps & HTMLProperties;

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: element = 'div', children, className, ...rest }: BoxProps, ref) => {
    return createElement(
      element,
      {
        ref,
        ...rest,
        className: className,
      },
      children
    );
  }
);
