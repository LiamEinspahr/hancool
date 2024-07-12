import * as React from 'react';
import { Box, createTheme, Divider, Grid, styled, ThemeProvider, Typography } from '@mui/material';

const particleUsageStyle_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    display: 'flex', 
                    flexDirection: 'column', 
                    fontSize: '2vw',
                    height: '60%', 
                    justifyContent: 'center',
                    textShadow: '0px 0px 30px #F4FF00'
                }
            }
        }
    }
})

const ParticleUsageStyle_StyledBox = styled(Box)({
    backgroundColor: '#E0DFBA',
    borderRadius: '8px', 
    color: 'black',
    height: '100%', 
    paddingLeft: '8px',
    paddingRight: '8px',
    width: '100%', 
    
})

export default function ParticleUsageStyle({usage}) {

    return(
        <Grid item xs={12} sx={{textAlign: 'center', height: '50%', pt: '4px'}}>
            <ParticleUsageStyle_StyledBox>
                <Typography sx={{height: '25%', fontSize: '1.25vw'}}>
                    Usage
                    <Divider sx={{backgroundColor: 'black'}} />
                </Typography>
                <ThemeProvider theme={particleUsageStyle_typography}>
                    <Typography>
                        {usage}
                    </Typography>
                </ThemeProvider>
            </ParticleUsageStyle_StyledBox>
        </Grid>
    );
}