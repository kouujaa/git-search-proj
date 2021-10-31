import * as React from 'react'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { CustomButton } from './LoginLayout.style';

export default function LoginLayout() {
    return (
        <CustomButton>
            <NavLink to={"/home"}><Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Login to Github</Typography></NavLink>
        </CustomButton>
    );
}
