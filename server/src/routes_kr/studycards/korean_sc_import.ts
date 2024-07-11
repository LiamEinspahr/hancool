import { Router } from "express";
import koreanRouter from './korean_sc_api';

const router = Router();

router.use('/studycards', koreanRouter);

export default router;