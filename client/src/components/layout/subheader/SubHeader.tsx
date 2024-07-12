import * as React from 'react';
import { AppBar, Box, Button, Container, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Typography, createTheme, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { BorderAllRounded } from '@mui/icons-material';
import { RenderedButtonsContext } from '../header/Header';
import KR_Table from '../../ui/table/words_table/WordsTable';
import { SubHeaderContext } from '../../../App';


const subHeader_theme = createTheme({
    components: {
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    '@media (min-width: 600px)': {minWidth: '100%'},
                    
                },
                middleButton: {
                    backgroundColor: '#272727',
                    borderRadius: '20px',
                    color: 'white',
                    marginLeft: '0.25%',
                    maxHeight: '38px',
                    minWidth: '8%',
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#161616',
                    '@media (min-width: 600px)': {maxWidth: '92vw', minHeight: '48px', paddingLeft: '0.5%', paddingRight: '0.5%'},
                    marginLeft: '0%'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '1.6vw', 
                    width: '7.5vw'
                }
            }
        }
    },
    palette: {
        mode: 'dark'
    }
})

export default function SubHeader() {

    const {renderedButtons, setRenderedButtons} = React.useContext(RenderedButtonsContext);
    const {renderedLanguage, setRenderedLanguage} = React.useContext(SubHeaderContext);
    
    function handleClick(name: string) {
        if(name === 'korean') {
            setRenderedLanguage('korean');
        }
        else if(name === 'japanese') {
            setRenderedLanguage('japanese');
        }
        else {
            return <h1>ERROR</h1>
        }
        return;
    }
    
    return(
            <Box id="subHeader_root" sx={{ flexGrow: 1, boxShadow: 10, color: 'red', marginBottom: '3vh', ['.MuiBox-root']:{zIndex: 10}}}>
                <AppBar position="static" sx={{backgroundColor: '#161616'}}>
                    <ThemeProvider theme={subHeader_theme}>
                        <Toolbar>
                            <ToggleButtonGroup exclusive>
                                {renderedButtons.map((button, index) => (
                                    (renderedButtons[index].isLanguage)
                                    ? <ToggleButton 
                                        aria-label={`${renderedButtons[index].name}`}
                                        aria-pressed={true}
                                        value={`${renderedButtons[index].name}`}
                                        onClick={() => handleClick(renderedButtons[index].name)}
                                        >
                                            {renderedButtons[index].name}
                                        </ToggleButton>
                                    : <></>
                                ))}
                            </ToggleButtonGroup>
                                <Typography>
                                    {renderedLanguage[0].toUpperCase() + renderedLanguage.slice(1, renderedLanguage.length)}
                                </Typography>
                        </Toolbar>
                    </ThemeProvider>
                </AppBar>
            </Box>
    );
}