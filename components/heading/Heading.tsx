import React from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import {
  headingLargeFontStyle,
  headingLargeStyle,
  headingMediumFontStyle,
  headingMediumStyle,
} from './Heading.css';
import styles from './Heading.module.scss';

export default function Heading(props: any) {
  const { size } = props;

  return size === 'large' ? (
    <h1 className={composeClassNames(headingLargeStyle, headingLargeFontStyle)}>
      {props.children}
    </h1>
  ) : (
    <h2
      className={composeClassNames(headingMediumStyle, headingMediumFontStyle)}
    >
      {props.children}
    </h2>
  );
}
