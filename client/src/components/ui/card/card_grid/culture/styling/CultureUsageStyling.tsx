import { Box, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const CultureUsageStyling_StyledBox = styled(Box)({
    border: '1px solid white', 
    borderRadius: '8px', 
    display: 'flex',
    height: '100%', 
    width: '100%'
  })
  
  const cultureUsageStyling_gridTheme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          root: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '33%',   
            justifyContent: 'flex-start'
          }
        }
      }
    }
  })

const cultureUsageStyling_typographyTitleTheme = createTheme({
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
  
  const cultureUsageStyling_typographyTextTheme = createTheme({
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

export default function CultureUsageStyling({usage}) {

    return(
        <ThemeProvider theme={cultureUsageStyling_gridTheme}>
            <Grid item xs={12}>
                <CultureUsageStyling_StyledBox>
                    <ThemeProvider theme={cultureUsageStyling_typographyTitleTheme}>
                        <Typography>Usage</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={cultureUsageStyling_typographyTextTheme}>
                        <Typography>{usage}</Typography>
                    </ThemeProvider>
                </CultureUsageStyling_StyledBox>
            </Grid>
        </ThemeProvider>
    );
}