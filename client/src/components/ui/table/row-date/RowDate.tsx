import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import { DatePicker ,LocalizationProvider } from '@mui/x-date-pickers';

export default function RowDate({disabled}) {

    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            disabled={disabled}
            sx={{
                width: '75%',
                paddingTop: '1px',
                paddingBottom: '1px'
            }}
                />
        </LocalizationProvider>
    );
}