import { Router } from "express";
import japaneseRouter from './japanese_words_table_api';

const router = Router();

router.use('/words', japaneseRouter);

export default router;