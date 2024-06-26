import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker ,LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/es-us';
import dayjs from 'dayjs'



export default function RowDate({disabled, id, onChange, passedInDate}) {

    dayjs().format();

    const [value, setValue] = React.useState<Dayjs | null>(dayjs(passedInDate));
    
    const handleChange = (newDate: Dayjs | null) => {
        setValue(newDate);
        const day = newDate?.date();
        const month = newDate!.month() + 1;
        const year = newDate?.year();
        const formattedDate = dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DD");
        onChange(id, formattedDate);
    };
    
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            disabled={disabled}
            onChange={(newValue) => handleChange(newValue)}
            sx={{
                width: '75%',
                paddingTop: '7px',
                paddingBottom: '1px'
            }}
            value={value}
                />
        </LocalizationProvider>
    );
}