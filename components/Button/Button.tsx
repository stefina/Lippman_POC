import React, { forwardRef } from 'react';
import { ClickableProps, Clickable } from '../Clickable';
import { buttonStyle } from './Button.css';

export type ButtonProps = ClickableProps;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((rest, ref) => {
  return <Clickable {...rest} className={buttonStyle} ref={ref} />;
});
