import { Router } from "express";
import db from "../../db/kr";

const router = Router();

router.get('/prompter_prompts', async (req,res) => {
    try {
      const words = await db.prompter.getPrompts();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.get('/prompter_vocab', async (req,res) => {
    try {
      const words = await db.prompter.getVocab();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  export default router;