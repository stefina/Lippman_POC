import React from 'react';

interface ArrowSvg {
  direction?: string;
}

export default function LeftArrowSvg(props: ArrowSvg) {
  const { direction } = props;

  return direction ? (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="12" fill="white" />
      <g clipPath="url(#clip0_0_1)">
        <path
          d="M5.75 0.75L6.8075 1.8075L3.3725 5.25H15.5V6.75H3.3725L6.815 10.1925L5.75 11.25L0.5 6L5.75 0.75Z"
          fill="#6B7280"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect width="16" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.25 0.75L9.1925 1.8075L12.6275 5.25L0.5 5.25L0.5 6.75L12.6275 6.75L9.185 10.1925L10.25 11.25L15.5 6L10.25 0.75Z"
        fill="#6B7280"
      />
    </svg>
  );
}
