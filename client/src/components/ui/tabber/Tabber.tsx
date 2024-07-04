import { Box, Tab, Tabs, ThemeProvider, createTheme } from '@mui/material';
import * as React from 'react';
import { categoryHeaders } from '../../data/CategoryHeaderData';
import { StudyCardsPageCategoryContext } from '../../pages/StudyCards/StudyCardsPage';

const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'white'
                }
            }
        }
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
        <ThemeProvider theme={theme}>
            <Box sx={{borderRadius: '2px', maxWidth: '100%', maxHeight: '44.49px',  backgroundColor: '#53AA41' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"        
                    >
                    {categoryHeaders.map((category, index) => (
                        <Tab sx={{color: '#3a772e', ['&.Mui-selected']: {color: 'white' }}} id={`${categoryHeaders[index].id}`} label={`${categoryHeaders[index].displayName}`} />
                    ))}
                </Tabs>
            </Box>
        </ThemeProvider>
    );
}