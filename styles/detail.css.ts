import { style } from '@vanilla-extract/css';
import { boxSprinkles } from '../components/Box/Box.css';

export const detailWrapperStyles = boxSprinkles({
  marginTop: 10,
  marginBottom: 6,
  paddingX: 4,
  paddingTop: 6,
  paddingBottom: 6,
  backgroundColor: 'white',
  boxShadow: 'default',
});

export const detailImageWrapperStyle = style({
  height: 600,
  width: 600,
});

export const detailImageStyle = style({
  objectFit: 'contain',
});
