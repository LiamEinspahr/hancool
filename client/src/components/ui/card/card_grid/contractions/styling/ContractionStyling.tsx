import { Box, createTheme, Grid, styled, Typography } from '@mui/material';
import * as React from 'react';
import EqualsStyling from './EqualsStyling';
import { ThemeProvider } from '@emotion/react';


const ContractionStyling_StyledBox = styled(Box)({
  backgroundColor: '#CECECE',
  borderRadius: '8px',
  height: '50%',
  maxWidth: '74.5%',
  width: 'auto'
});

const contractionStyling_theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '16px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black', 
          display:'flex', 
          flexDirection:'column',
          fontSize: '7.2vw',
          height: '100%',
          justifyContent:'center'
        }
      }
    }
  }
})

export default function ContractionStyling({contraction}) {

    return(
      <ThemeProvider theme={contractionStyling_theme}>
        <Grid item xs={6}>
            <ContractionStyling_StyledBox>
              <Typography sx={{
                  }}>
                {contraction}
              </Typography>
            </ContractionStyling_StyledBox>
            <EqualsStyling />
          </Grid>
        </ThemeProvider>
    );
}