import * as React from 'react';
import { SubHeaderContext } from '../../App';
import SubHeader from '../layout/subheader/SubHeader';
import WordsTable from '../ui/table/words_table/WordsTable';

export default function TablesPage() {

    const {renderedLanguage, setRenderedLanguage} = React.useContext(SubHeaderContext);
    
    function handleClick(name: string) {
        if(name === 'korean') {
            setRenderedLanguage('korean');
        }
        else if(name === 'japanese') {
            setRenderedLanguage('japanese');
        }
        else {
            return <h1>ERROR</h1>
        }

        return;
    }

    return(
        <>
            <SubHeader />
            <WordsTable language={renderedLanguage} />
        </>
    );
}

