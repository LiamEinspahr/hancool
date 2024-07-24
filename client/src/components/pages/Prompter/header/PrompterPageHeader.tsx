import { Button, Container, createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';


const prompterPageHeader_theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    height: '8%',
                    justifyContent: 'space-between',
                    '@media (min-width: 600px)': {paddingLeft: '16px', paddingRight: '16px'},
                    '@media (min-width: 1200px)': {minWidth: '100%'},
                    width: '100%',
                    
                }
            }
        }
    }
})

export default function PrompterPageHeader({generate, hide, hidden}) {


    const handleGenerate = () => {
       return(generate());
    }

    const handleHide = () => {
        return(hide());
    }

    return(
        <ThemeProvider theme={prompterPageHeader_theme}>
            <Container>
                <Button onClick={() => {handleGenerate()}}>Generate New Sentence</Button>
                {hidden ? <Button onClick={() => {handleHide()}}>Show Translation</Button> : <Button onClick={() => {handleHide()}}>Hide Translation</Button>}
                
            </Container>
        </ThemeProvider>
        
        
    );
}