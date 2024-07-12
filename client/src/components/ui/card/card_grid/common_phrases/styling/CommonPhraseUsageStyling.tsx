import { Box, createTheme, Grid, styled, ThemeProvider, Typography } from '@mui/material';

const CommonPhrasesUsageStyling_StyledBox = styled(Box)({
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#874BA0', 
    borderRadius: '8px', 
    display: 'flex',
    height: '100%', 
    width: '100%', 
})

const commonPhrasesUsage_typography = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white', 
                    fontSize: '2.5vh'
                }
            }
        }
    }
})

export default function CommonPhraseUsageStyling({usage}) {

    return(
        <Grid item xs={6} sx={{textAlign: 'center'}}>
            <CommonPhrasesUsageStyling_StyledBox>
                <ThemeProvider theme={commonPhrasesUsage_typography}>
                    <Typography>
                        {usage}
                    </Typography>
                </ThemeProvider>
            </CommonPhrasesUsageStyling_StyledBox>
        </Grid>
    );
}