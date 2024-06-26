import * as React from 'react';
import SubHeader from '../layout/subheader/SubHeader';
import StudyCard from '../ui/card/StudyCard';
import { cardTestData } from '../data/CardTestData';
import CategoryHeader from '../layout/categoryheader/CategoryHeader';


export default function FlashCardsPage() {

    return(
        <>
            <SubHeader />
            <CategoryHeader />
            <StudyCard cards={cardTestData} />
        </>
    );
}