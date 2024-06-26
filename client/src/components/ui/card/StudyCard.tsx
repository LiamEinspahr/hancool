import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { CardInterface } from '../../data/CardInterface';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', backgroundColor: '#272727', color: 'white' }}
    >
      •
    </Box>
  );
  
  export default function StudyCard({cards}) {
    return (
      <Container sx={{display: 'flex', ['@media (max-width: 1200px)']: {maxWidth: '100%'}, ['@media (min-width: 1200px)']: {maxWidth: '100%'}}} >
        {cards.map((card, index) => (
          <Card sx={{width: 500, backgroundColor: '#272727', color: 'white' }}>
            <CardContent>
            <Typography sx={{ fontSize: 14, backgroundColor: '#272727' }}gutterBottom>
                {cards[index].title}
              </Typography>
              <Typography variant="h5" component="div">
                {cards[index].info}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {cards[index].category}
              </Typography>
              <Typography variant="body2">
                {cards[index].commentary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{cards[index].dropdown}</Button>
            </CardActions>
          </Card>
        ))}        
      </Container>
    );
  }