import React, { SVGProps } from 'react';
import { composeClassNames } from '../../utils/composeClassNames';
import { IconSprinkles, iconStyle, iconSprinkles } from './Icons.css';

export const IconTypeArtwork = ({
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
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917ZM8.85417 14.0625L11.4583 17.1979L15.1042 12.5L19.7917 18.75H5.20833L8.85417 14.0625Z" />
    </svg>
  );
};
