import * as React from 'react';
import { SubHeaderContext } from '../../App';
import { RenderedButtonsContext } from '../layout/header/Header';
import { Link } from 'react-router-dom';
import KR_Table from '../ui/table/kr_table/KR_Table';
import JP_Table from '../ui/table/jp_table/JP_Table';
import SubHeader from '../layout/subheader/SubHeader';

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
            {renderedLanguage === 'korean' ? <KR_Table /> : <JP_Table />}
        </>
    );
}

