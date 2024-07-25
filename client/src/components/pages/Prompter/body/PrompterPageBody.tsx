import { Container, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';


const prompterPageBody_theme = createTheme({
    components: {
        MuiStack: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    display: 'flex',
                    height: '82%',
                    paddingTop: '15%'
                }
            }
        }
    }
})

export default function PrompterPageBody({displaySentence, displayLangauge, hidden, hiddenSentence}) {


    return(
        <ThemeProvider theme={prompterPageBody_theme}>
            <Stack direction="column" spacing={2}>
                <Typography sx={{fontSize: '6vh'}}>
                    {displaySentence}
                </Typography>
                <Typography sx={{fontSize: '3vh'}}>
                    {hidden ? <></> : hiddenSentence}
                </Typography>   
            </Stack>
            <Container>
                {displayLangauge==='english' 
                ? <Typography>English to Korean</Typography>
                : <Typography>Korean to English</Typography>
                }
            </Container>
        </ThemeProvider>
        
    );
}