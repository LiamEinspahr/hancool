import * as React from 'react';
import Paginator from '../../../ui/paginator/Paginator';
import TemplateStudyCard from '../../../ui/card/TemplateStudyCard';
import { Container } from '@mui/material';


export default function StudyCardsPageBody({renderedCard}) {

    return(
        <Container id="studyCardsPage_body" sx={{height: '83%'}} >
            <Paginator />
            {/*<TemplateStudyCard renderCard={renderedCard} />*/}
        </Container>
    );
}