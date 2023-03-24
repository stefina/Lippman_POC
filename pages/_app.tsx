import '../styles/main.scss';
import type { AppProps } from 'next/app';
import DefaultLayout from '../components/DefaultLayout';
import localFont from "next/font/local";
import { themeClass } from '../styles/theme.css';
import '../styles/global.css';
import { createContext, Dispatch, useReducer } from 'react';
import { composeClassNames } from '../utils/composeClassNames';

const photoElyseeFont = localFont({
  src: [
    {
      path: './fonts/PhotoElysee-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-DisplayBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-DisplayBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-DisplayBoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-DisplayBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/PhotoElysee-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PhotoElysee-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
});

interface AppState {
  isOverlayOpen: boolean;
}

const initialState: AppState = {
  isOverlayOpen: false,
};

export enum ActionType {
  SetOverlay = 'setOverlay',
}

type ActionSetOverlay = {
  type: ActionType.SetOverlay;
  payload: {
    isOverlayOpen: boolean;
  };
};

type Action = ActionSetOverlay;

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case ActionType.SetOverlay:
    default: {
      return {
        ...state,
        isOverlayOpen: action.payload.isOverlayOpen,
      };
    }
  }
}

interface AppContextInterface {
  state: AppState;
  dispatch: Dispatch<Action> | null;
}

export const AppContext = createContext<AppContextInterface>({
  state: initialState,
  dispatch: null,
});

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <DefaultLayout
        className={composeClassNames(photoElyseeFont.className, themeClass)}
      >
        <Component {...pageProps} />
      </DefaultLayout>
    </AppContext.Provider>
  );
}
