import { Container } from '@mui/material';
import * as React from 'react';
import Tabber from '../../../ui/tabber/Tabber';
import StudyDrawer from '../../../ui/drawer/StudyDrawer';


export default function StudyCardsPageFooter() {

    return(
        <Container sx={{display: 'flex', height:'7.5%', justifyContent: 'center', alignItems: 'flex-end', ['@media (min-width: 1200px)']:{maxWidth: '100%'}, }}>
            <Container sx={{bottom: 6, width: '2vw', ml: 0, mr: 0, ['@media (min-width: 600px)']:{paddingLeft: 0, paddingRight: 0}}}>
                <StudyDrawer  />
            </Container>
            <Container id="studyCardsPage_footer" sx={{width: '100%', ml: 0, mr: 0, ['@media (min-width: 1200px)']:{maxWidth: '30%'}, ['@media (min-width: 600px)']:{paddingLeft: 0, paddingRight: 0}}}>
                <Tabber />
            </Container>
        </Container>
    );
}