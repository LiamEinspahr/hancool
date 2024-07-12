import Paginator from '../../../ui/paginator/Paginator';
import { Container } from '@mui/material';



export default function StudyCardsPageBody() {

    return(
        <Container id="studyCardsPage_body" sx={{height: '83%'}} >
            <Paginator />
        </Container>
    );
}