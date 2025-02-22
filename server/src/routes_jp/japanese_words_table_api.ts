import { Router } from "express";
import db from "../db/jp";

const today = new Date().toISOString().split('T')[0];

const router = Router();

// GET /api/words/<specific>
router.get('/:id', async (req,res) => {
    try {
      const id = req.params.id
      const [word] = await db.words.getOneJapaneseWord(id);
      res.json(word);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  // GET /api/words/<general>
  router.get('/', async (req,res) => {
    
    try {
      const words = await db.words.getAllJapaneseWords();
      words.map((word) => {
        let wordDate = parseDate(word?.expirationDate);
        if(wordDate === today) {
          word!.lock = false;
        }
        else {
        word!.lock = !!word!.lock
        }
      })
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  const parseDate = (date: string | undefined) => {
    let yyyymmdd = new Date(date!).toISOString().split('T')[0];
    //console.log(yyyymmdd);
    return(yyyymmdd);
  }
  
  //INSERT
  router.post('/', async (req, res) => {
    try {
      const newWord = {...req.body };
      const result = db.words.insertJapaneseWord(newWord);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  //DELETE
  router.delete('/', async (req, res) => {
    try {
      const id = req.body.id;
      const result = db.words.deleteJapaneseWord(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  // ====================================================================================
  router.put('/updateID/:id', async (req,res) => {
    try {
      const oldID = req.params.id;
      const updatedID = req.body.id;
      const result = await db.words.modifyJapaneseWordID(updatedID, oldID);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateWord/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedWord = req.body.word;
      const result = await db.words.modifyJapaneseWord(updatedWord, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateRomanization/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedRomanization = req.body.romanization;
      const result = await db.words.modifyJapaneseWordRomanization(updatedRomanization, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateDefinition/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedDefinition = req.body.definition;
      const result = await db.words.modifyJapaneseWordDefinition(updatedDefinition, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateComfortability/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedComforability = req.body.comfortability;
      const result = await db.words.modifyJapaneseWordComfortability(updatedComforability, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.put('/updateExpirationDate/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedExpirationDate = req.body.expirationDate;
      const result = await db.words.modifyJapaneseWordExpirationDate(updatedExpirationDate, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  //UPDATE /api/words/updateLock/:id
  router.put('/updateLock/:id', async (req,res) => {
    try {
      const id = req.params.id;
      const updatedLock = req.body.lock;
      const result = await db.words.modifyJapaneseWordLock(updatedLock, id);
      res.json(result);
      return;
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  

  export default router;