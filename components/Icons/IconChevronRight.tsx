import React, { SVGProps } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { IconSprinkles, iconStyle, iconSprinkles } from './Icons.css';

export const IconChevronRight = ({
  height,
  width,
  size,
  color,
  ...rest
}: Omit<SVGProps<SVGSVGElement>, 'color'> & IconSprinkles) => {
  return (
    <svg
      {...rest}
      className={composeClassNames(
        iconStyle,
        iconSprinkles({ height, width, size, color })
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
