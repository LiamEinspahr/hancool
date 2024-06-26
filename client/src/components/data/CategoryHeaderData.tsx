import * as React from 'react';


interface CategoryHeader {
    id: string,
    displayName: string,
    isShown: Boolean
}

export const categoryHeaders: CategoryHeader[] = [

    {id: 'common', displayName: 'Common Phrases', isShown: true},
    {id: 'conjugations', displayName: 'Conjugations', isShown: true},
    {id: 'culture', displayName: 'Culture', isShown: true},
    {id: 'syntax', displayName: 'Syntax', isShown: true},
    {id: 'particels', displayName: 'Particles', isShown: true}
    
];