import { Box, Tab, Tabs, ThemeProvider, createTheme } from '@mui/material';
import * as React from 'react';
import { categoryHeaders } from '../../data/CategoryHeaderData';
import { StudyCardsPageCategoryContext } from '../../pages/StudyCards/StudyCardsPage';

const tabber_theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#3a772e', 
                    '&.Mui-selected': {color: 'white' }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'white'
                }
            }
        },
    },
    palette: {
        mode: 'dark'
    }
})

export default function Tabber() {

    const {renderedCategory, setRenderedCategory} = React.useContext(StudyCardsPageCategoryContext);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setRenderedCategory(event.currentTarget.id);
    };

    return(
        <ThemeProvider theme={tabber_theme}>
            <Box sx={{borderRadius: '2px', maxWidth: '100%', maxHeight: '44.49px',  backgroundColor: '#53AA41' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"        
                    >
                    {categoryHeaders.map((category, index) => (
                        <Tab id={`${categoryHeaders[index].id}`} label={`${categoryHeaders[index].displayName}`} />
                    ))}
                </Tabs>
            </Box>
        </ThemeProvider>
    );
}