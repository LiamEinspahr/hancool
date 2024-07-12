import { Box, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const ConjugationsMeaningStyling_StyledBox = styled(Box)({
    backgroundColor: '#C8B497', 
    borderRadius: '8px', 
    height: '100%',
    paddingLeft: '8px',
    paddingRight: '8px'
})

const conjugationsMeaningStyling_typographyTitle = createTheme({
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
                    fontSize: '1.25vw'
                }
            }
        }
    }
})

const conjugationsMeaningStyling_typographyText = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black', 
                    fontSize: '2vw'
                }
            }
        }
    }
})


export default function ConjugationMeaningStyling({meaning}) {


    return(
        <Grid item sx={{height: '75%', pb: '4px', textAlign: 'center'}}>
            <ConjugationsMeaningStyling_StyledBox>
                <ThemeProvider theme={conjugationsMeaningStyling_typographyTitle}>
                    <Typography>
                        Meaning
                        <Divider variant="middle"/>
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={conjugationsMeaningStyling_typographyText}>
                    <Typography>
                        {meaning}
                    </Typography>
                </ThemeProvider>
            </ConjugationsMeaningStyling_StyledBox>
        </Grid>
    );
}