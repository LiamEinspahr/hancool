import * as React from 'react';
import { Button, Input } from '@mui/material';
import { Link } from 'react-router-dom';




export default function HeaderButtons() {
    const buttons=['Home', 'About']

    return(
        <>
            {buttons.map(text => (
            <Link to={"/"+ text.toLowerCase()}>
                <Button variant='outlined'>{text}</Button>
            </Link>
        ))}
        </>
    );
}