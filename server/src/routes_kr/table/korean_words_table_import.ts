import { Router } from "express";
import koreanRouter from './korean_words_table_api';

const router = Router();

router.use('/words', koreanRouter);

export default router;