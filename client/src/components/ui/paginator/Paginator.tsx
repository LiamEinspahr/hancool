import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { StudyCardsPageContext } from '../../pages/StudyCards/StudyCardsPage';
import TemplateStudyCard from '../card/TemplateStudyCard';
import SimpleGrow from '../card/card_expansion/CardExpansion';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const content: any = [
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/137.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full//233.png',
  'https://www.models-resource.com/resources/big_icons/56/55277.png?updated=1665890171'
];

function Paginator() {

  const {renderedCards, setRenderedCards} = React.useContext(StudyCardsPageContext);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = content.length;

  const handleNext = () => {
    if(activeStep+1 === maxSteps )
        setActiveStep(0);
    else
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep === 0)
        setActiveStep((prevActiveStep) => maxSteps-1)
    else
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box id="paginator_root" sx={{borderRadius: '2px'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          color: '#9BCDFF',
          backgroundColor: '#2E557C',
          borderRadius: '2px'
        }}
      >
        <Typography>{renderedCards}</Typography>
      </Paper>
      <Box id="EDIT_ME" sx={{position: 'relative', display: 'flex', height: '60vh', width: '100%', backgroundColor: '#272727', borderRadius: '3px' }}>
        <TemplateStudyCard renderCard={renderedCards} />
      </Box>
      <MobileStepper
      sx={{color: '#90caf9', backgroundColor: '#2E557C', height: '3vh', borderRadius: '2px' }}
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{color: '#9BCDFF'}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} sx={{color: '#9BCDFF'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Paginator;
