import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { PaginatorStepContext, StudyCardsPageCategoryContext, StudyCardsPageDataContext } from '../../pages/StudyCards/StudyCardsPage';
import TemplateStudyCard from '../card/TemplateStudyCard';


function Paginator() {

  const {renderedCategory, setRenderedCategory} = React.useContext(StudyCardsPageCategoryContext);
  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  let currentCategory = renderedCategory[0].toUpperCase() + renderedCategory.slice(1);

  const theme = useTheme();
  const maxSteps = renderedData.length;

  const handleNext = () => {
    if(step+1 === maxSteps )
        setStep(0);
    else
      setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(step === 0)
        setStep((prevActiveStep) => maxSteps-1)
    else
      setStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setStep(step);
  };

  return (
    <PaginatorStepContext.Provider value={{step, setStep}}>
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
          <Typography sx={{fontSize: '2vw'}}>{renderedData[step]?.title}</Typography>
        </Paper>
        <Box sx={{position: 'relative', display: 'flex', height: '60vh', width: '100%', backgroundColor: '#272727', borderRadius: '3px' }}>
          <TemplateStudyCard renderCard={renderedCategory}  />
        </Box>
        <MobileStepper
        sx={{color: '#90caf9', backgroundColor: '#2E557C', height: '3vh', borderRadius: '2px' }}
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={step}
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
    </PaginatorStepContext.Provider>
  );
}

export default Paginator;
