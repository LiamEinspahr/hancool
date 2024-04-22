import express from 'express';
import apiRouter from './routes';

  const app = express();

  app.use('/api', apiRouter);

  const PORT = 3300;
  app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));