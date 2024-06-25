import * as React from 'react';
import { RenderedButtonsContext } from '../layout/header/Header';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';


export default function TablesPage() {

    const {renderedButtons, setRenderedButtons} = React.useContext(RenderedButtonsContext);
    
    return(
        <Box sx={{height: "9vh"}}>
            <AppBar position='relative' sx={{height: '9vh'}}>
                <Toolbar sx={{['@media (orientation: landscape)']: {height: 0}, ['@media (min-width: 600px)']: {height: 0} }}>
                {renderedButtons.map((button, index) => (
                    (renderedButtons[index].isLanguage)
                    ? <Link to = {`/${renderedButtons[index].name}`} style={{paddingLeft: "0.33vw"}}>
                        <Button variant='outlined' key={`${renderedButtons[index].name}`} sx={{color: 'white'}}>{renderedButtons[index].name}</Button>
                    </Link>
                    : <></>
                ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

