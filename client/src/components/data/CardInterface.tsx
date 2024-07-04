import * as React from 'react';

export interface CardInterface {
    title: string,
    info: string,
    category: string,
    commentary: string,
    dropdown: string,
};

export interface AbbreviationsCardInterface {
    id: number,
    title: string,
    abbreviation: string,
    abbreviants: string,
    extra: string,
}

export interface CommonPhrasesCardInterface {
    id: number,
    title: string,
    commonPhrase: string,
    meaning: string,
    usage: string,
    extra: string
}

export interface ConjugationsCardInterface {
    id: number,
    title: string,
    conjugation: string,
    meaning: string,
    honorLevel: string
    extra: string,
}

export interface CultureCardInterface {
    id: number,
    title: string,
    culture: string,
    meaning: string,
    usage: string,
    extra: string
}

export interface ParticlesCardInterface {
    id: number,
    title: string,
    particle: string,
    meaning: string,
    usage: string,
    extra: string
}

export interface SyntaxCardInterface {
    id: number,
    title: string,
    syntax: string,
    meaning: string,
    usage: string,
    extra: string
}

