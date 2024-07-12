import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import SyntaxCardGrid from './card_grid/syntax/SyntaxCardGrid';
import { StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';
import ContractionsCardGrid from './card_grid/contractions/ContractionsCardGrid';
import ParticlesCardGrid from './card_grid/particles/ParticlesCardGrid';
import CultureCardGrid from './card_grid/culture/CultureCardGrid';
import ConjugationsCardGrid from './card_grid/conjugations/ConjugationsCardGrid';
import CommonPhrasesCardGrid from './card_grid/common_phrases/CommonPhrasesCardGrid';
import { CommonPhrasesCardInterface, ConjugationsCardInterface, ContractionsCardInterface, CultureCardInterface, ParticlesCardInterface, SyntaxCardInterface } from '../../data/CardInterface';


const syntaxCard_theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#222222', 
          color: 'white',
          height: '100%',  
          positon: 'fixed', 
          width: '100%',
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: 'flex', 
          height: '10%', 
          justifyContent:'flex-end', 
          width: '100%', 
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          height: '90%'
        }
      }
    }
  },
  palette: {
    mode: 'dark'
  }
});


export default function CardGridContainer({currentState, renderThisCard, setDrawerState}) {

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

  const [openExpansion, setOpenExpansion] = React.useState(false);
  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);

  const handler = (state: boolean) => {
    return setDrawerState(!currentState);
  }

  return (
    <ThemeProvider theme={syntaxCard_theme}>
      <Card 
        sx={{height: '100%', backgroundColor: '#222222', 
        color: 'white', positon: 'fixed', 
        width: '100%',

        }} 
        variant="outlined">
          <CardContent sx={{height: '90%'}}>
            {
              (() => {
                    switch(renderThisCard) {
                      case 'contractions' :
                          setRenderedData(contractions); 
                          return <ContractionsCardGrid  />
                      case 'commonPhrases' :
                          setRenderedData(commonPhrases);
                          return <CommonPhrasesCardGrid />
                      case 'conjugations' : 
                          setRenderedData(conjugations);
                          return <ConjugationsCardGrid />
                      case 'culture' :
                          setRenderedData(culture); 
                          return <CultureCardGrid />
                      case 'particles' :
                          setRenderedData(particles); 
                          return <ParticlesCardGrid />
                      case 'syntax' :
                          setRenderedData(syntax); 
                          return <SyntaxCardGrid />
                    }
              })()
            }
          </CardContent>
          <CardActions>
            <IconButton onClick={() => handler(currentState)}>
              <ArrowRightIcon sx={{backgroundColor: '#222222', color: 'white', fontSize: '60px', position: 'absolute'}} />
            </IconButton>
          </CardActions>
        </Card>
      </ThemeProvider>
  );
}