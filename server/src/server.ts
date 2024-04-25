import express from 'express';
import apiRouter from './routes';

  const app = express();

  app.use(express.json());
  app.use('/api', apiRouter);

  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));