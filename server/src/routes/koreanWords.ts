import { Router } from "express";
import db from "../db";

const router = Router();

// GET /api/words/<specific>
router.get('/:id', async (req,res) => {
    try {
      const id = req.params.id
      const [word] = await db.words.getOneKoreanWord(id);
      res.json(word);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  // GET /api/words/<general>
  router.get('/', async (req,res) => {
    try {
      const words = await db.words.getAllKoreanWords();
      words.map((word) => {
        word!.lock = !!word!.lock
      })
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  //INSERT
  router.post('/', async (req, res) => {
    try {
      const newWord = {...req.body };
      const result = db.words.insertKoreanWord(newWord);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  

  export default router;