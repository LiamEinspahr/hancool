import * as React from 'react';
import SubHeader from '../../layout/subheader/SubHeader';
import StudyCard from '../../ui/card/StudyCard';
import { cardTestData } from '../../data/CardTestData';
import CategoryHeader from '../../layout/categoryheader/CategoryHeader';
import Panner from '../../ui/panner/Panner';
import { Box, Container } from '@mui/material';
import AbbreviationsCards from './abbreviationsCards/AbbreviationsCards';
import CommonPhrasesCards from './commonPhrasesCards/CommonPhrasesCards';
import ConjugationsCards from './conjugationsCards/ConjugationsCards';
import CultureCards from './cultureCards/CultureCards';
import ParticlesCards from './particlesCards/ParticlesCards';
import SyntaxCards from './syntaxCards/SyntaxCards';
import StudyDrawer from '../../ui/drawer/StudyDrawer';

interface StudyCardsPageContextType {
    renderedCards: string,
    setRenderedCards: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
    renderedCards: 'abbreviations',
    setRenderedCards: (category: string) => {}
  } as StudyCardsPageContextType;

export const StudyCardsPageContext = React.createContext<StudyCardsPageContextType>(defaultState);


export default function StudyCardsPage() {

    const components = {
        AbbreviationsCards,
        CommonPhrasesCards,
        ConjugationsCards,
        CultureCards,
        ParticlesCards,
        SyntaxCards
    }

    const [renderedCards, setRenderedCards] = React.useState('abbreviations');
    
    let RenderedCard = components.AbbreviationsCards;
                
   


    return(
        <Box sx={{height: '93.5vh', position: 'relative'}}>
            
            <StudyCardsPageContext.Provider value={{renderedCards, setRenderedCards}}>
            
            <SubHeader />
            <StudyDrawer data={cardTestData} />
            {/*<CategoryHeader />*/}
            
            {
                (() => {
                    switch(renderedCards) {
                        case 'abbreviations' : 
                            return <AbbreviationsCards />
                        case 'commonPhrases' : 
                            return <CommonPhrasesCards />
                        case 'conjugations' : 
                            return <ConjugationsCards />
                        case 'culture' : 
                            return <CultureCards />
                        case 'particles' : 
                            return <ParticlesCards />
                        case 'syntax' : 
                            return <SyntaxCards />
                    }
                })()
            }
            <Container sx={{position: 'absolute', bottom: 6, left: 0, display: 'flex', justifyContent:'center', alignItems: 'flex-end',  ['@media (min-width: 1200px)']:{maxWidth: '100%', maxHeight: '100%'}, ['@media (min-width: 600px)']:{paddingLeft: '1.3vw', paddingRight: '1.3vw'}  }}>
                <Panner />
            </Container>
            </StudyCardsPageContext.Provider>
        </Box>
    );
}