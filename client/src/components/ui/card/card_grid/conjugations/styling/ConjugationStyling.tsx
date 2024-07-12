import { Box, Container, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const ConjugationsStyling_StyledBox = styled(Box)({

    backgroundColor: '#2B536B', 
    borderRadius: '8px', 
    display: 'flex', 
    flexDirection: 'column',
    height: '100%', 
    justifyContent: 'space-between',
    paddingLeft: '8px',
    paddingRight: '8px' 
})

const conjugationsStyling_typographyTitle = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black', 
                    fontSize: '1.75vw', 
                    fontWeight: 'bold'
                }
            }
        }
    }
})

const conjugationsStyling_typographyText = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    color: 'white', 
                    display: 'flex', 
                    fontSize: '3vw',
                    height: '100%', 
                    justifyContent: 'center'
                }
            }
        }
    }
})


export default function ConjugationStyling({conjugation}) {


    return(
        <Grid item xs={6} sx={{textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ConjugationsStyling_StyledBox>
                <ThemeProvider theme={conjugationsStyling_typographyTitle}>
                    <Typography>
                        Conjugation
                        <Divider variant="middle"/>
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={conjugationsStyling_typographyText}>
                    <Typography>
                        {conjugation}
                    </Typography>
                </ThemeProvider>
            </ConjugationsStyling_StyledBox>
        </Grid>
    );
}