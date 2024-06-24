import * as React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Padding } from '@mui/icons-material';
import { RenderedButtonsContext } from '../Header';




export default function HeaderButtons() {

    const {renderedButtons, setRenderedButtons} = React.useContext(RenderedButtonsContext);

    return(
        <Container sx={{display: 'flex', width: '100%', marginLeft: 0, marginRight: 0, ['@media (min-width: 600px)']: {paddingLeft: 0, paddingRight: 0}, ['@media (min-width: 1200px)']: {maxWidth: '91%'}}}>
        { (renderedButtons[0].isShown)
                ? <Link to = {"/korean"} style={{paddingLeft: "1vw"}}>
                    <Button variant='outlined' key="korean">한국어</Button>
                </Link>
                : <></>
        }
        {   (renderedButtons[1].isShown)
                ? <Link to = {"/japanese"} style={{paddingLeft: "0.33vw"}}>
                    <Button variant='outlined' key="japanese">Japanese</Button>
                </Link>
                : <></>
        }
        {   (renderedButtons[2].isShown)
                ? <Link to = {"/resources"} style={{paddingLeft: "0.33vw"}}>
                    <Button variant='outlined' key="about">Resources</Button>
                  </Link>
                : <></>
        
        }
        {   (renderedButtons[3].isShown)
                ? <Link to = {"/about"} style={{paddingLeft: "0.33vw"}}>
                    <Button variant='outlined' key="about">About</Button>
                </Link>
                : <></>
        }
            
        </Container>
    );
}