import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Padding } from '@mui/icons-material';




export default function HeaderButtons() {

    return(
        <>
            <Link to = {"/home"} style={{paddingLeft: "1vw"}}>
                <Button variant='outlined' key="home">Home</Button>
            </Link>
            <Link to = {"/about"} style={{paddingLeft: "0.33vw"}}>
                <Button variant='outlined' key="about">About</Button>
            </Link>
        </>
    );
}