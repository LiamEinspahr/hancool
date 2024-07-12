import { Box, createTheme, Grid, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const CommonPhrasesMeaningStyling_StyledBox = styled(Box)({

    alignItems: 'center', 
    backgroundColor: '#2D3166', 
    borderRadius: '8px',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '60%', 
    
})

const commonPhrasesMeaning_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',  
                    fontSize: '3.75vh', 
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue',
                }
            }
        }
    }
})

export default function CommonPhraseMeaningStyling({meaning}) {

    return(
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <CommonPhrasesMeaningStyling_StyledBox>
                <ThemeProvider theme={commonPhrasesMeaning_typography}>
                <Typography sx={{}}>
                    {meaning}
                </Typography>
                </ThemeProvider>
                
            </CommonPhrasesMeaningStyling_StyledBox>
        </Grid>
    );
}