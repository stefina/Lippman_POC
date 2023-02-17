import React, { SVGProps } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { IconSprinkles, iconSprinkles, iconStyle } from './Icons.css';

export const IconArrowRight = ({
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
      <path d="M16.125 5.70834L14.6562 7.17709L19.427 11.9583L2.58329 11.9583L2.58329 14.0417L19.427 14.0417L14.6458 18.8229L16.125 20.2917L23.4166 13L16.125 5.70834Z" />
    </svg>
  );
};
