import React from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { textFontStyle, textStyle } from './Text.css';

export default function Text(props: any) {
  return (
    <p className={composeClassNames(textStyle, textFontStyle)}>
      {props.children}
    </p>
  );
}
