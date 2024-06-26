import * as React from 'react';
import { AppBar, Box, Button, Container, ToggleButton, ToggleButtonGroup, Toolbar, Typography, styled } from '@mui/material';
import { categoryHeaders } from '../../data/CategoryHeaderData';




export default function SubHeader() {
    
    return(
        <>
        <Box sx={{position: 'relative', marginX: '1.26%', borderRadius: '20px' }}>
                <AppBar position="static" sx={{backgroundColor: '#53AA41', borderRadius: '2px'}}>
                    <Toolbar sx={{ marginLeft: '0%', ['@media (min-width: 600px)']: {minHeight: '48px', paddingLeft: '0.5%', paddingRight: '0.5%', maxWidth: '92vw'}}}>
                        <ToggleButtonGroup exclusive
                            sx={{
                                maxWidth: '100%',
                                ['@media (min-width: 600px)']: {minWidth: '100%'},
                                '.MuiToggleButtonGroup-middleButton': {
                                    backgroundColor: '#3a772e',
                                    borderRadius: '5px',
                                    color: 'white',
                                    maxHeight: '25px',
                                    minWidth: '7%', 
                                    marginLeft: '0.25%'
                                },
                                '.MuiToggleButtonGroup-firstButton': {
                                    backgroundColor: '#3a772e',
                                    borderRadius: '5px',
                                    color: 'white',
                                    maxHeight: '25px',
                                    minWidth: '7%', 
                                    marginLeft: '0.25%'
                                },
                                '.MuiToggleButtonGroup-lastButton': {
                                    backgroundColor: '#3a772e',
                                    borderRadius: '5px',
                                    color: 'white',
                                    maxHeight: '25px',
                                    minWidth: '7%', 
                                    marginLeft: '0.25%'
                                }
                            }}
                        >
                            {categoryHeaders.map((button, index) => (
                                (categoryHeaders[index].isShown)
                                ? <ToggleButton 
                                    aria-label={`${categoryHeaders[index].id}`}
                                    aria-pressed={true}
                                    value={`${categoryHeaders[index].id}`}
                                    >
                                        {categoryHeaders[index].displayName}
                                  </ToggleButton>
                                : <></>
                            ))}
                        </ToggleButtonGroup>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}