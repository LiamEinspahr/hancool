import { AppBar, Box, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, createTheme} from '@mui/material';
import { categoryHeaders } from '../../data/CategoryHeaderData';


const categoryHeader_theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: 'static',
                    backgroundColor: '#53AA41',
                    borderRadius: '2px'
                }
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    '@media (min-width: 600px)': {minWidth: '100%'},
                    '.MuiToggleButtonGroup-firstButton': {
                        backgroundColor: '#3a772e',
                        borderRadius: '5px',
                        color: 'white',
                        marginLeft: '0.25%',
                        maxHeight: '25px',
                        minWidth: '7%',
                        
                    },
                    '.MuiToggleButtonGroup-lastButton': {
                        backgroundColor: '#3a772e',
                        borderRadius: '5px',
                        color: 'white',
                        marginLeft: '0.25%',
                        maxHeight: '25px',
                        minWidth: '7%'
                        
                    },
                    '.MuiToggleButtonGroup-middleButton': {
                        backgroundColor: '#3a772e',
                        borderRadius: '5px',
                        color: 'white',
                        marginLeft: '0.25%',
                        maxHeight: '25px',
                        minWidth: '7%'
                        
                    }  
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    marginLeft: '0%',
                    '@media (min-width: 600px)': {maxWidth: '92vw', minHeight: '48px', paddingLeft: '0.5%', paddingRight: '0.5%'}
                }
            }
        }
    }
})



export default function SubHeader() {
    
    return(
        <ThemeProvider theme={categoryHeader_theme}>
            <Box sx={{position: 'relative', marginX: '1.26%', borderRadius: '20px' }}>
                <AppBar>
                    <Toolbar sx={{ }}>
                        <ToggleButtonGroup exclusive>
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
        </ThemeProvider>
    );
}