import { Button, Card, CardActions, CardContent, Container, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import AbbreviationsCard from './categories/abbreviationCard/AbbreviationsCard';
import CommonPhrasesCard from './categories/commonPhrasesCard/CommonPhrasesCard';
import ConjugationsCard from './categories/conjugationsCard/ConjugationsCard';
import CultureCard from './categories/cultureCard/CultureCard';
import ParticlesCard from './categories/particlesCard/ParticlesCard';
import SyntaxCard from './categories/syntaxCard/SyntaxCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { AbbreviationsTestData, CommonPhrasesTestData, ConjugationsTestData, CultureTestData, ParticlesTestData, SyntaxTestData } from '../../data/CardTestData';
import { StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';



export default function TemplateStudyCard({renderCard}) {
    
    const [drawerState, setDrawerState] = React.useState(false);
    const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);

    const handleDrawerState = () => {
        setDrawerState(!drawerState);
    }

    return(
        <Container sx={{position: 'absolute', float: 'left', display: 'flex', height: '100%', py: '23px', width: '100%'}}>
            {
                (() => {
                    switch(renderCard) {
                        case 'abbreviations' :
                            setRenderedData(AbbreviationsTestData); 
                            return <AbbreviationsCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'commonPhrases' :
                            setRenderedData(CommonPhrasesTestData);
                            return <CommonPhrasesCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'conjugations' : 
                            setRenderedData(ConjugationsTestData);
                            return <ConjugationsCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'culture' :
                            setRenderedData(CultureTestData); 
                            return <CultureCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'particles' :
                            setRenderedData(ParticlesTestData); 
                            return <ParticlesCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'syntax' :
                            setRenderedData(SyntaxTestData); 
                            return <SyntaxCard currentState={drawerState} setDrawerState={handleDrawerState} />
                    }
                })()
            }
            { drawerState===true &&
            <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                This is test text
            </Container>
            }
        </Container>
    );
}