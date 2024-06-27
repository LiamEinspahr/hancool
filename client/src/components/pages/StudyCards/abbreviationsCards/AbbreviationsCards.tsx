import { Container } from '@mui/material';
import * as React from 'react';


export default function AbbreviationsCards() {

    return(
        <Container sx={{position: 'absolute', minHeight: '60%', justifyContent:'center', alignItems:'center', display: 'flex', ['@media (min-width: 1200px)']:{minWidth: '100%'}}}>
        <h1>Abbreviations</h1>
        </Container>
    );
}