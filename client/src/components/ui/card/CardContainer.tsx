import { Container, ThemeProvider, createTheme } from '@mui/material';
import * as React from 'react';
import { PaginatorStepContext, StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';
import CardGridContainer from './CardGridContainer';


const templateStudyCard_rootContainerTheme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    float: 'left', 
                    display: 'flex',
                    height: '100%',
                    paddingY: '23px', 
                    position: 'absolute', 
                    width: '100%'
                }
            }
        }
    },
    palette: {
        mode: 'dark'
    }
})

const templateStudyCard_nestedContainerTheme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1B2B3A',
                    border: '1px solid rgba(0,0,0,0.12)',  
                    borderRadius: '4px', 
                    float: 'right', 
                    height: '100%', 
                    paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'},
                    width: '33%', 
                }
            }
        }
    },
    palette: {
        mode: 'dark'
    }
})


export default function CardContainer({renderCard}) {
    
    const [drawerState, setDrawerState] = React.useState(false);
    const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
    const {step, setStep} = React.useContext(PaginatorStepContext);

    const handleDrawerState = () => {
        setDrawerState(!drawerState);
    }



    return(
        <ThemeProvider theme={templateStudyCard_rootContainerTheme}>
            <Container sx={{position: 'absolute', float: 'left', display: 'flex', height: '100%', py: '23px', width: '100%'}}>
            <CardGridContainer currentState={drawerState} renderThisCard={renderCard} setDrawerState={handleDrawerState} />
                <ThemeProvider theme={templateStudyCard_nestedContainerTheme}>
                { drawerState===true &&
                    (() => {
                        switch(renderCard) {
                            case 'commonPhrases' :
                                return(
                                    <Container>
                                        { renderedData[step]
                                            ? renderedData[step].common_phrase_extra
                                            : <h1>N/A</h1>
                                        }
                                    </Container>
                                );
                            case 'conjugations' : 
                            return(
                                <Container>
                                        { renderedData[step]
                                                ? renderedData[step].conjugations_extra
                                                : <h1>N/A</h1>

                                        }
                                </Container>
                            );
                            case 'contractions' :
                                return(
                                    <Container>
                                        { renderedData[step]
                                            ? renderedData[step].contractions_extra
                                            : <h1>N/A</h1>

                                        }
                                    </Container>
                                );
                            case 'culture' :
                                return(
                                    <Container>
                                        { renderedData[step]
                                            ? renderedData[step].culture_extra
                                            : <h1>N/A</h1>

                                        }
                                    </Container>
                                );
                            case 'particles' :
                                return(
                                    <Container>
                                        { renderedData[step]
                                            ? renderedData[step].particles_extra
                                            : <h1>N/A</h1>

                                        }
                                    </Container>
                                );
                            case 'syntax' :
                                return(
                                    <Container>
                                        { renderedData[step]
                                            ? renderedData[step].syntax_extra
                                            : renderedData[0].syntax_extra

                                        }
                                    </Container>
                                );
                        
                        }
                        
                    })()  
                }
                </ThemeProvider>
            </Container>
        </ThemeProvider>
    );
}