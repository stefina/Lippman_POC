import {
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import { vars } from '../../styles/theme.css';
import { color } from '../../styles/tokens/color';

const defaultSizes = {
  full: '100%',
  screen: '100vh',
  0: '0',
  auto: 'auto',
};

export const globals = ['inherit', 'initial', 'revert', 'unset'];

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
    zIndex: {
      auto: 'auto',
      negative: -1,
      generic1: 1,
      generic2: 2,
      generic3: 3,
      stickyMainNav: 10,
    },

    // Themed values
    boxShadow: {
      default:
        '0px 47px 98px rgba(0, 0, 0, 0.0671069), 0px 23.5229px 49.0479px rgba(0, 0, 0, 0.0975551), 0px 14.1691px 29.5441px rgba(0, 0, 0, 0.120149), 0px 9.08032px 18.9334px rgba(0, 0, 0, 0.14), 0px 5.88513px 12.2711px rgba(0, 0, 0, 0.159851), 0px 3.70462px 7.72453px rgba(0, 0, 0, 0.182445), 0px 2.12854px 4.43822px rgba(0, 0, 0, 0.212893), 0px 0.936824px 1.95338px rgba(0, 0, 0, 0.28)',
    },
    maxWidth: {
      staticContent: '37rem',
      ...defaultSizes,
    },
    backgroundColor: vars.color,
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
