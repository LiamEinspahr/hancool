import { Router } from "express";
import koreanRouter from './koreanWords';

const router = Router();

router.use('/words', koreanRouter);

export default router;