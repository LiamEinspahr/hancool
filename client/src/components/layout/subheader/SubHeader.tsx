import * as React from 'react';
import { AppBar, Box, Button, Container, ToggleButton, ToggleButtonGroup, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { BorderAllRounded } from '@mui/icons-material';
import { RenderedButtonsContext } from '../header/Header';
import KR_Table from '../../ui/table/kr_table/KR_Table';
import { SubHeaderContext } from '../../../App';




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
        <>
        <Box sx={{ flexGrow: 1, boxShadow: 10, color: 'red', marginBottom: '3vh'}}>
                <AppBar position="static" sx={{backgroundColor: '#161616'}}>
                    <Toolbar sx={{ marginLeft: '0%', backgroundColor: '#161616', ['@media (min-width: 600px)']: {minHeight: '48px', paddingLeft: '0.5%', paddingRight: '0.5%', maxWidth: '92vw'}}}>
                        <ToggleButtonGroup exclusive
                            sx={{
                                maxWidth: '100%',
                                ['@media (min-width: 600px)']: {minWidth: '100%'},
                                '.MuiToggleButtonGroup-middleButton': {
                                    backgroundColor: '#272727',
                                    borderRadius: '20px',
                                    color: 'white',
                                    maxHeight: '38px',
                                    minWidth: '8%', 
                                    marginLeft: '0.25%'
                                    }
                            }}
                        >
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
                            <Typography sx={{fontSize: '1.6vw', width: '7.5vw'}}>
                                {renderedLanguage[0].toUpperCase() + renderedLanguage.slice(1, renderedLanguage.length)}
                            </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}