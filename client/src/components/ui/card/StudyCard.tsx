import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', backgroundColor: '#272727', color: 'white' }}
    >
      •
    </Box>
  );
  
  export default function StudyCard() {
    return (
      <Card sx={{maxWidth: 275, backgroundColor: '#272727', color: 'white' }}>
        <CardContent>
        <Typography sx={{ fontSize: 14, backgroundColor: '#272727' }}gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }