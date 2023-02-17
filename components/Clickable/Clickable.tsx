import Link from 'next/link';
import React, { forwardRef, ReactNode } from 'react';
import { UrlObject } from 'url';
import { composeClassNames } from '../../utils/composeClassNames';
import { ActiveLink } from '../ActiveLink';
import {
  extractLayoutAtomsFromProps,
  getLayoutComponentStyle,
  LayoutComponent,
  LayoutComponentProps,
} from '../LayoutComponent';

export type Url = string | UrlObject;

export type ClickableProps = {
  activeClassName?: string;
  className?: string;
  href?: string;
  internalHref?: Url;
  onClick?: () => void;
} & LayoutComponentProps;

export const Clickable = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ClickableProps
>(
  (
    {
      activeClassName,
      asLayout = 'box',
      className,
      href,
      internalHref,
      ...rest
    },
    ref
  ) => {
    const { atomProps, otherProps } = extractLayoutAtomsFromProps(rest);

    switch (true) {
      case !!internalHref && !!activeClassName:
        return (
          <ActiveLink
            {...otherProps}
            activeClassName={activeClassName as string}
            className={composeClassNames(
              className,
              getLayoutComponentStyle(asLayout, atomProps)
            )}
            href={internalHref as Url}
          />
        );

      case !!internalHref && !activeClassName:
        return (
          <Link
            {...otherProps}
            className={composeClassNames(
              className,
              getLayoutComponentStyle(asLayout, atomProps)
            )}
            href={internalHref as Url}
          />
        );

      case !!href:
        return (
          <LayoutComponent
            {...atomProps}
            {...otherProps}
            as="a"
            asLayout={asLayout}
            className={className}
            href={href}
            ref={ref}
          />
        );

      default:
        return (
          <LayoutComponent
            {...atomProps}
            {...otherProps}
            as="button"
            asLayout={asLayout}
            className={className}
            ref={ref}
          />
        );
    }
  }
);
