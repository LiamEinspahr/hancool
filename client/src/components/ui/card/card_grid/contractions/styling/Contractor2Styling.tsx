import { Box, createTheme, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const Contractor2Styling_StyledBox = styled(Box)({
    backgroundColor: '#CECECE', 
    borderRadius: '8px',
    height: '40%', 
    minWidth: '50%', 
    maxWidth: '100%', 
    width: 'auto',
})

const contractor2Styling_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    alignItems: 'center', 
                    color: '#2549AA',
                    display: 'flex',
                    fontSize: '7.2vw',
                    height: '100%', 
                    justifyContent: 'center',    
                }
            }
        }
    }
})


export default function Contractor2Styling({contractor_2}) {

    return(
        <Contractor2Styling_StyledBox>
            <ThemeProvider theme={contractor2Styling_typography}>
                <Typography>
                    {contractor_2}
                </Typography>
            </ThemeProvider>
        </Contractor2Styling_StyledBox>
    );
}