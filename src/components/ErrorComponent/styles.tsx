import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import * as React from "react";


const theme = createTheme({
  palette:{
    background: {
      default: 'red',
    },
    text: {
      primary: 'black',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bdcolor: 'background.default',
          width: '80%',
        }}
      >
        <Box sx={{color: 'text.primary' }}>This is a filled error</Box>
      </Box>
    </ThemeProvider>
  )
}
