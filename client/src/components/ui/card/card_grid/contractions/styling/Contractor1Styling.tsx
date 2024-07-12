import { Box, createTheme, styled, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';

const Contractor1Styling_StyledBox = styled(Box)({
    backgroundColor: '#CECECE', 
    borderRadius: '8px',
    height: '40%', 
    minWidth: '50%', 
    maxWidth: '100%', 
    width: 'auto',
})

const contractor1Styling_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    alignItems: 'center', 
                    color: '#28AA25',
                    display: 'flex',
                    fontSize: '7.2vw',
                    height: '100%', 
                    justifyContent: 'center',    
                }
            }
        }
    }
})

export default function Contractor1Styling({contractor_1}) {

    return(
        <Contractor1Styling_StyledBox>
            <ThemeProvider theme={contractor1Styling_typography}>
                <Typography>
                    {contractor_1}
                </Typography>
            </ThemeProvider>
        </Contractor1Styling_StyledBox>
    );
}