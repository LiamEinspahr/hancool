import { Button, Card, CardActions, CardContent, Container, IconButton, ThemeProvider, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import ContractionsCard from './categories/contractionsCard/ContractionsCard';
import CommonPhrasesCard from './categories/commonPhrasesCard/CommonPhrasesCard';
import ConjugationsCard from './categories/conjugationsCard/ConjugationsCard';
import CultureCard from './categories/cultureCard/CultureCard';
import ParticlesCard from './categories/particlesCard/ParticlesCard';
import SyntaxCard from './categories/syntaxCard/SyntaxCard';
import { PaginatorStepContext, StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';
import { CommonPhrasesCardInterface, ConjugationsCardInterface, ContractionsCardInterface, CultureCardInterface, ParticlesCardInterface, SyntaxCardInterface } from '../../data/CardInterface';



export default function TemplateStudyCard({renderCard}) {
    
    const [drawerState, setDrawerState] = React.useState(false);
    const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
    const {step, setStep} = React.useContext(PaginatorStepContext);

    const handleDrawerState = () => {
        setDrawerState(!drawerState);
    }

    const [commonPhrases, setCommonPhrases] = React.useState<CommonPhrasesCardInterface[]>([]);
    const [conjugations, setConjugations] = React.useState<ConjugationsCardInterface[]>([]);
    const [contractions, setContractions] = React.useState<ContractionsCardInterface[]>([]);
    const [culture, setCulture] = React.useState<CultureCardInterface[]>([]);
    const [particles, setParticles] = React.useState<ParticlesCardInterface[]>([]);
    const [syntax, setSyntax] = React.useState<SyntaxCardInterface[]>([]);

    React.useEffect(() => {

        const fetchCommonPhrases = async () => {
            try {
                fetch("/kr_sc_api/studycards/commonphrases").then(
                    response => response.json()
                  ).then(
                    data => {
                      setCommonPhrases(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Common Phrases"); return}
        }

        const fetchConjugations = async () => {
            try {
                fetch("/kr_sc_api/studycards/conjugations").then(
                    response => response.json()
                  ).then(
                    data => {
                      setConjugations(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Conjugations"); return}
        }

        const fetchContractions = async () => {
            try {
                fetch("/kr_sc_api/studycards/contractions").then(
                    response => response.json()
                  ).then(
                    data => {
                      setContractions(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Contractions"); return}
        }

        const fetchCulture= async () => {
            try {
                fetch("/kr_sc_api/studycards/culture").then(
                    response => response.json()
                  ).then(
                    data => {
                        setCulture(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Culture"); return}
        }

        const fetchParticles = async () => {
            try {
                fetch("/kr_sc_api/studycards/particles").then(
                    response => response.json()
                  ).then(
                    data => {
                      setParticles(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Particles"); return}
        }

        const fetchSyntax = async () => {
            try {
                fetch("/kr_sc_api/studycards/syntax").then(
                    response => response.json()
                  ).then(
                    data => {
                     setSyntax(data);
                    }
                  )
            } catch (err) {console.log("Could not fetch Syntax"); return}
        }

        const fetchAll = async() => {
            await fetchCommonPhrases();
            await fetchConjugations();
            await fetchContractions();
            await fetchCulture();
            await fetchParticles();
            await fetchSyntax()
            return;
        }

        fetchAll();

    }, [])

    return(
        <Container sx={{position: 'absolute', float: 'left', display: 'flex', height: '100%', py: '23px', width: '100%'}}>
            {
                (() => {
                    switch(renderCard) {
                        case 'contractions' :
                            setRenderedData(contractions); 
                            return <ContractionsCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'commonPhrases' :
                            setRenderedData(commonPhrases);
                            return <CommonPhrasesCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'conjugations' : 
                            setRenderedData(conjugations);
                            return <ConjugationsCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'culture' :
                            setRenderedData(culture); 
                            return <CultureCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'particles' :
                            setRenderedData(particles); 
                            return <ParticlesCard currentState={drawerState} setDrawerState={handleDrawerState} />
                        case 'syntax' :
                            setRenderedData(syntax); 
                            return <SyntaxCard currentState={drawerState} setDrawerState={handleDrawerState} />
                    }
                })()
            }
            { drawerState===true &&

                (() => {
                    switch(renderCard) {
                        case 'commonPhrases' :
                            return(
                                <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                        ? renderedData[step].common_phrase_extra
                                        : <h1>N/A</h1>
                                    }
                                </Container>
                            );
                        case 'conjugations' : 
                        return(
                            <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                            ? renderedData[step].conjugations_extra
                                            : <h1>N/A</h1>

                                    }
                            </Container>
                        );
                        case 'contractions' :
                            return(
                                <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                        ? renderedData[step].contractions_extra
                                        : <h1>N/A</h1>

                                    }
                                </Container>
                            );
                        case 'culture' :
                            return(
                                <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                        ? renderedData[step].culture_extra
                                        : <h1>N/A</h1>

                                    }
                                </Container>
                            );
                        case 'particles' :
                            return(
                                <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                        ? renderedData[step].particles_extra
                                        : <h1>N/A</h1>

                                    }
                                </Container>
                            );
                        case 'syntax' :
                            return(
                                <Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
                                    { renderedData[step]
                                        ? renderedData[step].syntax_extra
                                        : renderedData[0].syntax_extra

                                    }
                                </Container>
                            );
                    }
                })()
            
            }
        </Container>
    );
}


<Container  sx={{float: 'right', height: '100%', backgroundColor: '#1B2B3A', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.12)', width: '33%', paddingY: '16px', ['@media (min-wdith: 600px)']:{paddingX: '16px'}}}>
    This is test text
</Container>