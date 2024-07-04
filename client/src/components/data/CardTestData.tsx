import * as React from 'react';
import { AbbreviationsCardInterface, CardInterface, CommonPhrasesCardInterface, ConjugationsCardInterface, CultureCardInterface, ParticlesCardInterface, SyntaxCardInterface } from './CardInterface';


export const cardTestData: CardInterface[] = [
    {title: 'Card1', info: 'test 1', category: 'cat 1', commentary: '...', dropdown: 'x'},
    {title: 'Card2', info: 'test 2', category: 'cat 2', commentary: '...', dropdown: 'x'},
    {title: 'Card3', info: 'test 3', category: 'cat 3', commentary: '...', dropdown: 'x'},
    {title: 'Card4', info: 'test 4', category: 'cat 4', commentary: '...', dropdown: 'x'},
    {title: 'Card5', info: 'test 5', category: 'cat 5', commentary: '...', dropdown: 'x'},
];


export const AbbreviationsTestData: AbbreviationsCardInterface[] = [
    {id: 1, title: 'lol', abbreviation: 'rofl', abbreviants: 'roll on the floor laughing', extra: 'N/A' },
    {id: 2, title: 'hehe', abbreviation: 'lmao', abbreviants: 'laugh my apple off', extra: 'N/A' },
    {id: 3, title: 'haha', abbreviation: 'coptr', abbreviants: 'heli', extra: 'N/A' },

]

export const CommonPhrasesTestData: CommonPhrasesCardInterface[] = [
    {id: 1, title: 'dis', commonPhrase: 'lol', meaning: 'huh', usage: 'nahh', extra: "N/A"},
    {id: 2, title: 'is', commonPhrase: 'bruh', meaning: 'bro', usage: 'brother', extra: "N/A2"},
    {id: 3, title: 'commmphrz', commonPhrase: 'hehexd', meaning: 't1', usage: 'bm', extra: "N/A3"}
    
]

export const ConjugationsTestData: ConjugationsCardInterface[] = [
    {id: 1, title: 'con', conjugation: 'esque', meaning: 'like', honorLevel: 'over 9000', extra: "N/A"},
    {id: 2, title: 'juga', conjugation: 'ily', meaning: 'I <3 u', honorLevel: 'over 1', extra: "N/A2"},
    {id: 3, title: 'tions', conjugation: 'ed', meaning: 'did', honorLevel: '-1', extra: "N/A3"}
]

export const CultureTestData: CultureCardInterface[] = [
    
    {id: 1, title: 'b', culture: 'drinkin', meaning: 'get droonk', usage: 'flirt', extra: "N/A"},
    {id: 2, title: 'ru', culture: 'bowing', meaning: 'respec', usage: 'every1', extra: "N/A2"},
    {id: 3, title: 'uhhhh', culture: 'fork ban', meaning: 'ju1 mad', usage: 'intercontinental ballistic missle', extra: "N/A3"}
]

export const ParticlesTestData: ParticlesCardInterface[] = [
    {id: 1, title: 'tie', particle: 'to', meaning: 'none', usage:'a', extra: "N/A"},
    {id: 2, title: 't', particle: 'from', meaning: 'exit location', usage: 'c', extra: "N/A2"},
    {id: 3, title: 'le', particle: 'and', meaning: 'joining', usage: 'dc', extra: "N/A3"}
]

export const SyntaxTestData: SyntaxCardInterface[] = [
    {id: 1, title: "sy", syntax: 'whut', meaning: 'idk', usage: 'bruh', extra: "N/A"},
    {id: 2, title: "nta", syntax: 'cute girl', meaning: ':O', usage: 'blush', extra: "N/A2"},
    {id: 3, title: "x", syntax: 'comp sci', meaning: 'sometimes cool', usage: '$$$', extra: "N/A3"}
]

