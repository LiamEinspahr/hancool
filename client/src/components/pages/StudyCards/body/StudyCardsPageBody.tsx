import * as React from 'react';
import Paginator from '../../../ui/paginator/Paginator';
import TemplateStudyCard from '../../../ui/card/TemplateStudyCard';
import { Container } from '@mui/material';



export default function StudyCardsPageBody() {

    return(
        <Container id="studyCardsPage_body" sx={{height: '83%'}} >
            <Paginator />
        </Container>
    );
}