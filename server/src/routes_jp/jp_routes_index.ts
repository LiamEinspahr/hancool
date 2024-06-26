import { Router } from "express";
import japaneseRouter from './japaneseWords';

const router = Router();

router.use('/words', japaneseRouter);

export default router;