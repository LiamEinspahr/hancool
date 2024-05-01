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

  // ====================================================================================
  /*router.put('/updateID/:id', async (req,res) => {
    try {
      const oldID = req.params.id;
      const updatedID= {...req.body };
      const updatedWord = [...req.body]
      const result = await db.words.modifyKoreanWordID(updatedID, oldID);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateWord/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedWord = { ...req.body };
      const result = await db.words.modifyKoreanWord(updatedWord, id);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateRomanization/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedRomanization = [...req.body]
      const result = await db.words.modifyKoreanWordRomanization(updatedRomanization, id);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateDefinition/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedDefinition = [...req.body]
      const result = await db.words.modifyKoreanWordDefinition(updatedDefinition, id);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateComfortability/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedComforability = [...req.body]
      const result = await db.words.modifyKoreanWordComfortability(updatedComforability, id);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateExpirationDate/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedExpirationDate = [...req.body]
      const result = await db.words.modifyKoreanWordExpirationDate(updatedExpirationDate, id);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });*/

  //UPDATE /api/words/updateLock/:id
  router.put('/updateLock/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedLock = req.body.lock;
      const result = await db.words.modifyKoreanWordLock(updatedLock, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  

  export default router;