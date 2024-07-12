import { Box, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const ConjugationsHonorLevelStyling_StyledBox = styled(Box)({
    backgroundColor: '#CECECE', 
    borderRadius: '8px', 
    height: '100%',
    paddingLeft: '8px',
    paddingRight: '8px'
})

const conjugationsHonorLevelStyling_typographyTitle = createTheme({
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
                    fontSize: '1.25vw',
                    paddingLeft: '8px',
                    paddingRight: '8px'
                }
            }
        }
    }
})

const conjugationsHonorLevelStyling_typographyText = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black', 
                    fontSize: '2vw',
                    paddingLeft: '8px',
                    paddingRight: '8px'
                }
            }
        }
    }
})

export default function ConjugationHonorLevelStyling({honorLevel}) {


    return(
        <Grid item xs={12} sx={{ height: '100%', pt: '4px', textAlign: 'center'}}>
            <ConjugationsHonorLevelStyling_StyledBox>
                <ThemeProvider theme={conjugationsHonorLevelStyling_typographyTitle}>
                    <Typography>
                        Honor Level
                        <Divider variant="middle"/>
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={conjugationsHonorLevelStyling_typographyText}>
                    <Typography>
                        {honorLevel}
                    </Typography>
                </ThemeProvider>
            </ConjugationsHonorLevelStyling_StyledBox>
        </Grid>
    );
}