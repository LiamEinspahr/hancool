import { RowDataPacket } from "mysql2";
import { ModifyQuery, SelectQuery } from "../queryUtils";


interface CommonPhrasesCardInterface {
    id: number,
    title: string,
    common_phrase: string,
    meaning: string,
    usage: string,
    common_phrase_extra: string
}

interface ConjugationsCardInterface {
    id: number,
    title: string,
    conjugation: string,
    meaning: string,
    honor_level: string
    conjugations_extra: string,
}

interface ContractionsCardInterface {
    id: number,
    title: string,
    contraction: string,
    contractor_1: string,
    contractor_2: string,
    contractions_extra: string,
}

interface CultureCardInterface {
    id: number,
    title: string,
    pictureurl: string,
    culture: string,
    meaning: string,
    usage: string,
    culture_extra: string
}

interface ParticlesCardInterface {
    id: number,
    title: string,
    particle: string,
    meaning: string,
    usage: string,
    particles_extra: string
}

interface SyntaxCardInterface {
  id: number,
  title: string,
  syntax: string,
  meaning: string,
  commentary: string,
  syntax_example_english: string,
  syntax_example_korean: string
  syntax_extra: string   
}


  //GETTERS

  export function getAllCommonPhrasesCards() {
    return SelectQuery<CommonPhrasesCardInterface>('SELECT * FROM korean_common_phrases;');
  }

  export function getAllConjugationsCards() {
    return SelectQuery<ConjugationsCardInterface>('SELECT * FROM korean_conjugations;');
  }

  export function getAllContractionsCards() {
    return SelectQuery<ContractionsCardInterface>('SELECT * FROM korean_contractions;');
  }

  export function getAllCultureCards() {
    return SelectQuery<CultureCardInterface>('SELECT * FROM korean_culture;');
  }

  export function getAllParticlesCards() {
    return SelectQuery<ParticlesCardInterface>('SELECT * FROM korean_particles;');
  }

  export function getAllSyntaxCards() {
    return SelectQuery<SyntaxCardInterface>('SELECT * FROM korean_syntax;');
  }