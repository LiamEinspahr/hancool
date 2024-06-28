import { Container } from '@mui/material';
import * as React from 'react';
import Tabber from '../../../ui/tabber/Tabber';


export default function StudyCardsPageFooter() {

    return(
        <Container id="studyCardsPage_footer" sx={{position: 'absolute', bottom: 6, left: 0, display: 'flex', justifyContent:'center', alignItems: 'flex-end',  ['@media (min-width: 1200px)']:{maxWidth: '100%', maxHeight: '100%'}, ['@media (min-width: 600px)']:{paddingLeft: '1.3vw', paddingRight: '1.3vw'}  }}>
            <Tabber />
        </Container>
    );
}