import { useRouter } from 'next/router';
import { parse, stringify } from 'querystring';
import React from 'react';
import { Clickable } from '../Clickable';
import { IconArrowLeft } from '../Icons/IconArrowLeft';
import { articleDetailCloseStyle } from './ArtworkOverlayCloseButton.css';

export const ArtworkDetailCloseButton = () => {
  const router = useRouter();
  // In order to close the detail, remove the id param
  // but keep the rest of the query intact
  const { id, ...queryRest } = router.query;

  return (
    <Clickable
      internalHref={{ pathname: '/', query: queryRest }}
      className={articleDetailCloseStyle}
    >
      <IconArrowLeft />
    </Clickable>
  );
};
