import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import ModularScale from 'modular-scale';

export const ms = ModularScale({
  ratio: ModularScale.ratios.majorThird,
  base: 1
});

export default createMuiTheme({
  palette: {
    primary: {
      light: '#eb5757',
      main: '#E62D2D',
      dark: '#a11f1f'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    background: '#fff'
  },
  typography: {
    htmlFontSize: 15,
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: `${ms(7)}em`,
      fontWeight: 500
    },
    h2: {
      fontSize: `${ms(6)}em`
    },
    h3: {
      fontSize: `${ms(5)}em`
    },
    h4: {
      fontSize: `${ms(4)}em`
    },
    h5: {
      fontSize: `${ms(3)}em`
    },
    h6: {
      fontSize: `${ms(2)}em`
    },
    subtitle1: {
      fontSize: `${ms(1)}em`,
      fontWeight: 600
    },
    subtitle2: {
      fontSize: `${ms(-1)}em`
    },
    body1: {
      fontSize: `${ms(1)}em`
    },
    body2: {
      fontSize: `${ms(-1)}em`
    },
    button: {
      fontSize: `${ms(1)}em`
    },
    caption: {
      fontSize: `${ms(-1)}em`
    },
    overline: {
      fontSize: `${ms(-1)}em`
    }
  }
});
