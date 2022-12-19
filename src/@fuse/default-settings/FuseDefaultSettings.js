import { fuseDark } from '@fuse/colors';
import _ from '@lodash';
import { lightBlue, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import qs from 'qs';

/**
 * SETTINGS DEFAULTS
 */
export const defaultSettings = {
  customScrollbars: true,
  direction: 'ltr',
  theme: {
    main: 'default',
    navbar: 'mainThemeDark',
    toolbar: 'mainThemeLight',
    footer: 'mainThemeDark',
  },
};

export function getParsedQuerySettings() {
  const parsedQueryString = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  if (parsedQueryString && parsedQueryString.defaultSettings) {
    return JSON.parse(parsedQueryString.defaultSettings);
  }
  return {};

  // Generating route params from settings
  /* const settings = qs.stringify({
        defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
    });
    console.info(settings); */
}

/**
 * THEME DEFAULTS
 */
export const defaultThemeOptions = {
  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: '18px',
      },
      sizeSmall: {
        borderRadius: '15px',
      },
      sizeLarge: {
        borderRadius: '21px',
      },
      contained: {
        boxShadow: 'none',
        '&:hover, &:focus': {
          boxShadow: 'none',
        },
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
    // MuiMenu: {
    // 	paper: {
    // 		borderRadius: 12
    // 	}
    // },
    MuiDialog: {
      paper: {
        borderRadius: 16,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 16,
      },
    },
    MuiPopover: {
      paper: {
        borderRadius: 8,
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: 4,
        '&:before, &:after': {
          display: 'none',
        },
      },
    },
  },
};

export const mustHaveThemeOptions = {
  typography: {
    htmlFontSize: 10,
    fontSize: 13,
    body1: {
      fontSize: '1.3rem',
    },
    body2: {
      fontSize: '1.3rem',
    },
  },
};

export const defaultThemes = {
  default: {
    palette: {
      type: 'light',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  defaultDark: {
    palette: {
      type: 'dark',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
};

export function extendThemeWithMixins(obj) {
  const theme = createTheme(obj);
  return {
    border: (width = 1) => ({
      borderWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderLeft: (width = 1) => ({
      borderLeftWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderRight: (width = 1) => ({
      borderRightWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderTop: (width = 1) => ({
      borderTopWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderBottom: (width = 1) => ({
      borderBottomWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
  };
}

export function mainThemeVariations(theme) {
  return {
    mainThemeDark: _.merge({}, theme, {
      palette: {
        type: 'dark',
        background: {
          paper: '#1E2125',
          default: '#121212',
        },
        text: {
          primary: 'rgb(255,255,255)',
          secondary: 'rgb(229, 231, 235)',
          disabled: 'rgb(156, 163, 175)',
        },
      },
    }),
    mainThemeLight: _.merge({}, theme, {
      palette: {
        type: 'light',
        background: {
          paper: '#FFFFFF',
          default: '#F7F7F7',
        },
        text: {
          primary: 'rgb(17, 24, 39)',
          secondary: 'rgb(107, 114, 128)',
          disabled: 'rgb(149, 156, 169)',
        },
      },
    }),
  };
}
