
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Theme } from '@emotion/react';

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
      light: "#000"
    },
    secondary: {
      main: '#0091ea',
    },
  },
});


