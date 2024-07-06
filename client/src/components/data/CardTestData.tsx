import * as React from 'react';
import { ContractionsCardInterface, CardInterface, CommonPhrasesCardInterface, ConjugationsCardInterface, CultureCardInterface, ParticlesCardInterface, SyntaxCardInterface } from './CardInterface';


export const cardTestData: CardInterface[] = [
    {title: 'Card1', info: 'test 1', category: 'cat 1', commentary: '...', dropdown: 'x'},
    {title: 'Card2', info: 'test 2', category: 'cat 2', commentary: '...', dropdown: 'x'},
    {title: 'Card3', info: 'test 3', category: 'cat 3', commentary: '...', dropdown: 'x'},
    {title: 'Card4', info: 'test 4', category: 'cat 4', commentary: '...', dropdown: 'x'},
    {title: 'Card5', info: 'test 5', category: 'cat 5', commentary: '...', dropdown: 'x'},
];



export const CommonPhrasesTestData: CommonPhrasesCardInterface[] = [
    {id: 1, title: 'dis', common_phrase: 'lol', meaning: 'huh', usage: 'nahh', common_phrase_extra: "N/A"},
    {id: 2, title: 'is', common_phrase: 'bruh', meaning: 'bro', usage: 'brother', common_phrase_extra: "N/A2"},
    {id: 3, title: 'commmphrz', common_phrase: 'hehexd', meaning: 't1', usage: 'bm', common_phrase_extra: "N/A3"}
    
]

export const ConjugationsTestData: ConjugationsCardInterface[] = [
    {id: 1, title: 'con', conjugation: 'esque', meaning: 'like', honor_level: 'over 9000', conjugations_extra: "N/A"},
    {id: 2, title: 'juga', conjugation: 'ily', meaning: 'I <3 u', honor_level: 'over 1', conjugations_extra: "N/A2"},
    {id: 3, title: 'tions', conjugation: 'ed', meaning: 'did', honor_level: '-1', conjugations_extra: "N/A3"}
]

export const ContractionsTestData: ContractionsCardInterface[] = [
    {id: 1, title: 'lol', contraction: 'rofl', contractor_1: 'test', contractor_2: 'drive' , contractions_extra: 'N/A' },
    {id: 2, title: 'hehe', contraction: 'lmao', contractor_1: 'test2', contractor_2: 'drivelel', contractions_extra: 'N/A' },
    {id: 3, title: 'haha', contraction: 'coptr', contractor_1: 'ab', contractor_2: 'cde', contractions_extra: 'N/A' },

]

export const CultureTestData: CultureCardInterface[] = [
    
    {id: 1, title: 'b', pictureurl: 'na', culture: 'drinkin', meaning: 'get droonk', usage: 'flirt', culture_extra: "N/A"},
    {id: 2, title: 'ru', pictureurl: 'na', culture: 'bowing', meaning: 'respec', usage: 'every1', culture_extra: "N/A2"},
    {id: 3, title: 'uhhhh', pictureurl: 'na', culture: 'fork ban', meaning: 'ju1 mad', usage: 'intercontinental ballistic missle', culture_extra: "N/A3"}
]

export const ParticlesTestData: ParticlesCardInterface[] = [
    {id: 1, title: 'tie', particle: 'to', meaning: 'none', usage:'a', particles_extra: "N/A"},
    {id: 2, title: 't', particle: 'from', meaning: 'exit location', usage: 'c', particles_extra: "N/A2"},
    {id: 3, title: 'le', particle: 'and', meaning: 'joining', usage: 'dc', particles_extra: "N/A3"}
]

export const SyntaxTestData: SyntaxCardInterface[] = [
    {id: 1, title: "sy", syntax: 'whut', meaning: 'idk', commentary: 'bruh', syntax_extra: "N/A"},
    {id: 2, title: "nta", syntax: 'cute girl', meaning: ':O', commentary: 'blush', syntax_extra: "N/A2"},
    {id: 3, title: "x", syntax: 'comp sci', meaning: 'sometimes cool', commentary: '$$$', syntax_extra: "N/A3"}
]

