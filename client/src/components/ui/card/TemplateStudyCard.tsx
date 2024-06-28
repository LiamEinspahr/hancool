import { Button, Card, CardActions, CardContent, Container, ThemeProvider, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import AbbreviationsCard from './categories/abbreviationCard/AbbreviationsCard';
import CommonPhrasesCard from './categories/commonPhrasesCard/CommonPhrasesCard';
import ConjugationsCard from './categories/conjugationsCard/ConjugationsCard';
import CultureCard from './categories/cultureCard/CultureCard';
import ParticlesCard from './categories/particlesCard/ParticlesCard';
import SyntaxCard from './categories/syntaxCard/SyntaxCard';


export default function TemplateStudyCard({renderCard}) {
    
    return(
        <Container sx={{position: 'absolute', minHeight: '60%', justifyContent:'center', alignItems:'center', display: 'flex', ['@media (min-width: 1200px)']:{minWidth: '100%'}}}>
            {
                (() => {
                    switch(renderCard) {
                        case 'abbreviations' : 
                            return <AbbreviationsCard />
                        case 'commonPhrases' : 
                            return <CommonPhrasesCard />
                        case 'conjugations' : 
                            return <ConjugationsCard />
                        case 'culture' : 
                            return <CultureCard />
                        case 'particles' : 
                            return <ParticlesCard />
                        case 'syntax' : 
                            return <SyntaxCard />
                    }
                })()
            }
        </Container>
    );
}