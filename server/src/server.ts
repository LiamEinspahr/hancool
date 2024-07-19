import express from 'express';
import krPrompterRouter from './routes_kr/prompter/korean_prompter_import';
import krStudyCardsRouter from './routes_kr/studycards/korean_sc_import';
import krWordsTableRouter from './routes_kr/table/korean_words_table_import';
import jpRouter from './routes_jp/japanese_words_table_import';


  const app = express();

  app.use(express.json());
  app.use('/kr_prompter_api', krPrompterRouter);
  app.use('/kr_sc_api', krStudyCardsRouter);
  app.use('/kr_words_api', krWordsTableRouter);
  app.use('/jp_words_api', jpRouter);


  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));