import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { StudyCardsPageDataContext } from '../../../../pages/StudyCards/StudyCardsPage';
import { PaginatorStepContext } from '../../../../pages/StudyCards/StudyCardsPage';
import ParticleStyle from './styling/ParticleStyle';
import ParticleMeaningStyle from './styling/ParticleMeaningStyle';
import ParticleUsageStyle from './styling/ParticleUsageStyle';

const dividerTheme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'white'
        }
      }
    }
  }
})

export default function ParticlesCardGrid() {

  const {renderedData, setRenderedData} = React.useContext(StudyCardsPageDataContext);
  const {step, setStep} = React.useContext(PaginatorStepContext);

  if(step > renderedData.length) {
    setStep(0);
    return (
      <ThemeProvider theme={dividerTheme}>
          <Grid container spacing={2} sx={{height: '100%'}}>
            <ParticleStyle particle={renderedData[0]?.particle} />
          <Grid item xs={6} sx={{height: '100%', width: '100%'}}>
            <ParticleMeaningStyle meaning={renderedData[0]?.meaning} />
            <ParticleUsageStyle usage={renderedData[0]?.usage} />
          </Grid>
          </Grid>
        </ThemeProvider>
      );
  } else {
    return (
      <ThemeProvider theme={dividerTheme}>
        <Grid container spacing={2} sx={{height: '100%'}}>
          <ParticleStyle particle={renderedData[step]?.particle} />
          <Grid item xs={6} sx={{height: '100%', width: '100%'}}>
            <ParticleMeaningStyle meaning={renderedData[step]?.meaning} />
            <ParticleUsageStyle usage={renderedData[step]?.usage} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}