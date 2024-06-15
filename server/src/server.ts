import express from 'express';
import krRouter from './routes_kr/kr_routes_index';
import jpRouter from './routes_jp/jp_routes_index';

  const app = express();

  app.use(express.json());
  app.use('/kr_api', krRouter);
  app.use('/jp_api', jpRouter);

  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));