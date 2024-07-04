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
import { AbbreviationsTestData, CommonPhrasesTestData, ConjugationsTestData, CultureTestData, ParticlesTestData, SyntaxTestData } from '../../data/CardTestData';




interface StudyCardsPageCategoryContextType {
    renderedCategory: string,
    setRenderedCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface StudyCardsPageCategoryDataType {
    renderedData: any[],
    setRenderedData: React.Dispatch<React.SetStateAction<any[]>>;
}

interface PaginatorStepType {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const categoryDefaultState = {
    renderedCategory: 'abbreviations',
    setRenderedCategory: (category: string) => {}
} as StudyCardsPageCategoryContextType;

const dataDefaltState = {
    renderedData: AbbreviationsTestData,
    setRenderedData: (data: any[]) => {}
} as StudyCardsPageCategoryDataType

const paginatorDefaultState = {
    step: 0,
    setStep: (step: number) => {}
  } as PaginatorStepType

export const StudyCardsPageCategoryContext = React.createContext<StudyCardsPageCategoryContextType>(categoryDefaultState);

export const StudyCardsPageDataContext = React.createContext<StudyCardsPageCategoryDataType>(dataDefaltState);

export const PaginatorStepContext = React.createContext<PaginatorStepType>(paginatorDefaultState);

export default function StudyCardsPage() {

    const [renderedCategory, setRenderedCategory] = React.useState('abbreviations');
    const [renderedData, setRenderedData] = React.useState(SyntaxTestData);
    const [step, setStep] = React.useState(0);
    
            

    return(
        <Box id="studyCardsPage_root" sx={{height: '93.5vh', position: 'relative'}}>
            <StudyCardsPageCategoryContext.Provider value={{renderedCategory, setRenderedCategory}}>
                <StudyCardsPageDataContext.Provider value={{renderedData, setRenderedData}}>
                    <StudyCardsPageHeader />
                    <PaginatorStepContext.Provider value={{step, setStep}}>
                        <StudyCardsPageBody />
                        <StudyCardsPageFooter />
                    </PaginatorStepContext.Provider>
                </StudyCardsPageDataContext.Provider>
            </StudyCardsPageCategoryContext.Provider>
        </Box>
    );
}