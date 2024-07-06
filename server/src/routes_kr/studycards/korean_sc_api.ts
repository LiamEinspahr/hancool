import { Router } from "express";
import db from "../../db/kr";

const router = Router();

router.get('/commonphrases', async (req,res) => {
    try {
      const words = await db.studycards.getAllCommonPhrasesCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.get('/conjugations', async (req,res) => {
    try {
      const words = await db.studycards.getAllConjugationsCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });

  router.get('/contractions', async (req,res) => {
    try {
      const words = await db.studycards.getAllContractionsCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  router.get('/culture', async (req,res) => {
    try {
      const words = await db.studycards.getAllCultureCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  router.get('/particles', async (req,res) => {
    try {
      const words = await db.studycards.getAllParticlesCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });


  router.get('/syntax', async (req,res) => {
    try {
      const words = await db.studycards.getAllSyntaxCards();
      res.json(words);
    } catch (error) {
      res.status(500).json({error: 'Internal server error'});
    }
  });



  export default router;