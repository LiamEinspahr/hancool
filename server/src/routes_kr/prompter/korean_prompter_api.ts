import { Router } from "express";
import db from "../../db/kr";

const router = Router();

router.get('/prompter_sentence', async (req,res) => {
    try {
      const words = await db.prompter.getPrompts();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.get('/prompter_sentence_variable', async (req,res) => {
    try {
      const words = await db.prompter.getVocab();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  export default router;