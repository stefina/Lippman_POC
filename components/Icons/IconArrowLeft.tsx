import React, { SVGProps } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { IconSprinkles, iconSprinkles, iconStyle } from './Icons.css';

export const IconArrowLeft = ({
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
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.37504 19.7917L10.8438 18.3229L6.07296 13.5417L22.9167 13.5417L22.9167 11.4583L6.07296 11.4583L10.8542 6.67707L9.37504 5.20832L2.08337 12.5L9.37504 19.7917Z" />
    </svg>
  );
};
