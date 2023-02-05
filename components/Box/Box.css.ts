import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../../styles/theme.css';
import { brandColor, neutralColor } from '../../styles/tokens/color';

const defaultSizes = {
  full: '100%',
  screen: '100vh',
  0: '0',
  auto: 'auto',
};

export const globals = [
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset',
];

const boxPropertiesResponsive = defineProperties({
  conditions: {
    default: {},
    md: { '@media': '(min-width: 768px)' },
  },
  defaultCondition: 'default',
  responsiveArray: ['default', 'md'],
  properties: {
    // Keyword values
    position: ['static', 'absolute', 'fixed', 'relative', 'sticky'],
    display: ['none', 'block', 'inline', 'inline-block', 'flow-root'],
    alignSelf: [
      ...globals,
      'flex-start',
      'center',
      'flex-end',
      'stretch',
      'baseline',
      'auto',
    ],
    justifySelf: [
      ...globals,
      'flex-start',
      'center',
      'flex-end',
      'stretch',
      'baseline',
      'auto',
    ],
    flexGrow: ['0', '1'],
    flexShrink: ['0', '1'],
    flexBasis: { '0': '0', auto: 'auto', full: '100%' },
    overflowX: ['visible', 'hidden', 'scroll', 'clip', 'auto'],
    overflowY: ['visible', 'hidden', 'scroll', 'clip', 'auto'],
    cursor: [...globals, 'auto', 'default', 'pointer'],
    pointerEvents: ['none', 'auto'],
    scrollBehavior: ['smooth', 'auto'],
    zIndex: {
      auto: 'auto',
      negative: -1,
      generic1: 1,
      generic2: 2,
      generic3: 3,
      stickyMainNav: 10,
    },

    // Themed values
    boxShadow: vars.shadows,
    height: defaultSizes,
    width: defaultSizes,
    maxWidth: {
      staticContent: '37rem',
      ...defaultSizes,
    },
    backgroundColor: {
      white: vars.color.white,
      black: vars.color.black,
      transparent: vars.color.transparent,
      ...neutralColor,
      ...brandColor,
    },
    color: {
      white: vars.color.white,
      black: vars.color.black,
      transparent: vars.color.transparent,
      ...neutralColor,
      ...brandColor,
    },
    transition: {
      medium: 'all 200ms ease',
    },
    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    marginTop: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    overflow: ['overflowX', 'overflowY'],
  },
});

export const boxSprinkles = createSprinkles(boxPropertiesResponsive);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
