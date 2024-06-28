import * as React from 'react';
import SubHeader from '../../layout/subheader/SubHeader';
import StudyCard from '../../ui/card/TemplateStudyCard';
import { cardTestData } from '../../data/CardTestData';
import CategoryHeader from '../../layout/categoryheader/CategoryHeader';
import Tabber from '../../ui/tabber/Tabber';
import { Box, Container } from '@mui/material';
import StudyDrawer from '../../ui/drawer/StudyDrawer';
import TemplateStudyCard from '../../ui/card/TemplateStudyCard';
import Paginator from '../../ui/paginator/Paginator';
import StudyCardsPageHeader from './header/StudyCardsPageHeader';
import StudyCardsPageBody from './body/StudyCardsPageBody';
import StudyCardsPageFooter from './footer/StudyCardsPageFooter';

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

    const [renderedCards, setRenderedCards] = React.useState('abbreviations');
    
            

    return(
        <Box id="studyCardsPage_root" sx={{height: '93.5vh', position: 'relative'}}>
            <StudyCardsPageHeader />
            <StudyCardsPageBody renderedCard={renderedCards} />
            <StudyCardsPageFooter />
        </Box>
    );
}