import { Box, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const CultureMeaningStyling_StyledBox = styled(Box)({
  border: '1px solid white', 
  borderRadius: '8px', 
  display: 'flex',
  height: '100%', 
  width: '100%'
})

const cultureMeaningStyling_gridTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          alignItems: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start'
        }
      }
    }
  }
})

const cultureMeaningStyling_typographyTitleTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          alignItems: 'center' , 
          borderLeft: '0.5px dotted white',  
          display: 'flex',
          fontSize: '2vw',
          justifyContent: 'center', 
          transform: 'rotate(180deg)',
          width: '12%',
          writingMode: 'vertical-lr', 
        }
      }
    }
  }
});

const cultureMeaningStyling_typographyTextTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          alignItems: 'center', 
          display: 'flex', 
          fontSize: '1.5vw', 
          justifyContent: 'center', 
          paddingLeft: '5%',
          paddingRight: '5%', 
          width: '100%',         
        }
      }
    }
  }
})


export default function CultureMeaningStyling({meaning}) {

    return(
      <ThemeProvider theme={cultureMeaningStyling_gridTheme}>
          <Grid item xs={7}>
                <CultureMeaningStyling_StyledBox>
                  <ThemeProvider theme={ cultureMeaningStyling_typographyTitleTheme}>
                    <Typography>Meaning</Typography>
                  </ThemeProvider>
                  <ThemeProvider theme={cultureMeaningStyling_typographyTextTheme}>
                    <Typography>{meaning}</Typography>
                  </ThemeProvider>
                </CultureMeaningStyling_StyledBox>
          </Grid>
        </ThemeProvider>
    );
}