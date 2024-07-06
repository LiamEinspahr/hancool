import * as React from 'react';

export interface CardInterface {
    title: string,
    info: string,
    category: string,
    commentary: string,
    dropdown: string,
};

export interface CommonPhrasesCardInterface {
    id: number,
    title: string,
    common_phrase: string,
    meaning: string,
    usage: string,
    common_phrase_extra: string
}

export interface ConjugationsCardInterface {
    id: number,
    title: string,
    conjugation: string,
    meaning: string,
    honor_level: string
    conjugations_extra: string,
}

export interface ContractionsCardInterface {
    id: number,
    title: string,
    contraction: string,
    contractor_1: string,
    contractor_2: string,
    contractions_extra: string,
}

export interface CultureCardInterface {
    id: number,
    title: string,
    pictureurl: string,
    culture: string,
    meaning: string,
    usage: string,
    culture_extra: string
}

export interface ParticlesCardInterface {
    id: number,
    title: string,
    particle: string,
    meaning: string,
    usage: string,
    particles_extra: string
}

export interface SyntaxCardInterface {
    id: number,
    title: string,
    syntax: string,
    meaning: string,
    commentary: string,
    syntax_extra: string
}

