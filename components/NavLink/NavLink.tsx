import React, { forwardRef } from 'react';

import { Clickable, ClickableProps } from '../Clickable';
import { navLinkStyle } from './NavLink.css';

export type NavLinkProps = ClickableProps;

export const NavLink = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  NavLinkProps
>((rest, ref) => {
  return <Clickable {...rest} className={navLinkStyle} ref={ref} />;
});
