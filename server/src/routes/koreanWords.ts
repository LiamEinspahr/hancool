import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/words/<specific>
router.get('/:word_id', async (req,res) => {
    try {
      console.log(req.params.word_id);
      const [word] = await db.words.getOneKoreanWord();
      res.json(word);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  // GET /api/words/<general>
  router.get('/', async (req,res) => {
    try {
      const words = await db.words.getAllKoreanWords();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  export default router;