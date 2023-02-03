import React from 'react';
import styles from './Text.module.scss';

export default function Text(props: any) {
  return <p className={styles.text}>{props.children}</p>;
}
