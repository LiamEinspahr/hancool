import { Router } from "express";
import koreanRouter from './korean_prompter_api';

const router = Router();

router.use('/prompter', koreanRouter);

export default router;