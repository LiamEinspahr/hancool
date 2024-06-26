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
            {renderedButtons.map((button, index) => (
                  ((renderedButtons[index].isShown) && (renderedButtons[index].displayNavigation !== false))
                    ? <Link to = {`/${renderedButtons[index].name}`} style={{paddingLeft: "0.33vw"}}>
                        <Button variant='outlined' key={`${renderedButtons[index].name}`}>{renderedButtons[index].name}</Button>
                    </Link>
                    : <></>
                    )
                )
            }
        </Container>
    );
}