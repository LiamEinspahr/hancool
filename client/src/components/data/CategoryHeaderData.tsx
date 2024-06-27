import * as React from 'react';


interface CategoryHeader {
    id: string,
    displayName: string,
    isShown: Boolean
}

export const categoryHeaders: CategoryHeader[] = [

    {id: 'abbreviations', displayName: 'Abbreviations', isShown: true},
    {id: 'commonPhrases', displayName: 'Common Phrases', isShown: true},
    {id: 'conjugations', displayName: 'Conjugations', isShown: true},
    {id: 'culture', displayName: 'Culture', isShown: true},
    {id: 'particles', displayName: 'Particles', isShown: true},
    {id: 'syntax', displayName: 'Syntax', isShown: true}
    
    
];