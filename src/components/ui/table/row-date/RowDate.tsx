import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import { DatePicker ,LocalizationProvider } from '@mui/x-date-pickers';
import { useRowStateContext } from '../Table';


export default function RowDate(props: any) {

    const {rowState, setRowState} = useRowStateContext();


    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            sx={{
                width: '75%',
                paddingTop: '1px',
                paddingBottom: '1px'
            }}
                />
        </LocalizationProvider>
    );
}