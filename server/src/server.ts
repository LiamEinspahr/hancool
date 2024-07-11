import express from 'express';
import krWordsTableRouter from './routes_kr/table/korean_words_table_import';
import jpRouter from './routes_jp/japanese_words_table_import';
import krStudyCardsRouter from './routes_kr/studycards/korean_sc_import';

  const app = express();

  app.use(express.json());
  app.use('/kr_words_api', krWordsTableRouter);
  app.use('/kr_sc_api', krStudyCardsRouter);
  app.use('/jp_words_api', jpRouter);


  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));