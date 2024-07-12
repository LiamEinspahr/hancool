import { Box, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const syntaxExampleStyling_english = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    alignItems: 'center', 
                    border: '1px solid white',
                    display: 'flex', 
                    justifyContent: 'space-between',
                    paddingX: '16px'  
                }
            }
        }
    }
});
const syntaxExampleStyling_korean = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(180deg, rgba(198,11,49,1) 0%, rgba(1,51,120,1) 50%)', 
                    borderRadius: '4px', 
                    paddingX: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    border: '1px solid white'
                }
            }
        }
    }
});
const syntaxExampleStyling_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    borderRight: '0.5px dotted white',
                    display: 'flex',
                    fontSize: '3vh',
                    height: '100%', 
                    opacity: '.8',
                    paddingRight: '16px',  
                }
            }
        }
    }
});

export default function SyntaxExampleStyling({eng, kr}) {


    return(
        <>
            <ThemeProvider theme={syntaxExampleStyling_korean}>
                <Grid xs={12}>
                    <ThemeProvider theme={syntaxExampleStyling_typography}>
                        <Typography>
                            한국어
                        </Typography>
                    </ThemeProvider>
                    <Typography sx={{fontSize: '2.25vh'}}>
                        "{kr}"
                    </Typography>
                </Grid>
            </ThemeProvider>
            <ThemeProvider theme={syntaxExampleStyling_english}>
                <Grid xs={12}>
                    <ThemeProvider theme={syntaxExampleStyling_typography}>
                        <Typography>
                            미국어
                        </Typography>
                    </ThemeProvider>
                    <Typography sx={{fontSize: '1.75vh'}}>
                        "{eng}"
                    </Typography>
                </Grid>
            </ThemeProvider>
        </>
    );
}