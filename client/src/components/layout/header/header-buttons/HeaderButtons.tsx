import * as React from 'react';
import { Button, Container, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import { RenderedButtonsContext } from '../Header';

const headerButtons_theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex', 
                    marginLeft: 0, 
                    marginRight: 0, 
                    '@media (min-width: 600px)': {paddingLeft: 0, paddingRight: 0}, 
                    '@media (min-width: 1200px)': {maxWidth: '91%'},
                    width: '100%', 
                }
            }
        },
    },
    palette: {
        mode: 'dark'
    }
})

export default function HeaderButtons() {

    const {renderedButtons, setRenderedButtons} = React.useContext(RenderedButtonsContext);

    return(
        <ThemeProvider theme={headerButtons_theme}>
            <Container>
                {renderedButtons.map((button, index) => (
                    ((renderedButtons[index].isShown) && (renderedButtons[index].displayNavigation !== false))
                        ? <Link to = {`/${renderedButtons[index].name}`} style={{paddingLeft: '0.33vw'}}>
                            <Button variant='outlined' key={`${renderedButtons[index].name}`}>{renderedButtons[index].name}</Button>
                        </Link>
                        : <></>
                        )
                    )
                }
            </Container>
        </ThemeProvider>
    );
}