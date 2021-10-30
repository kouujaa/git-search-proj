import * as React from 'react'
import { Typography } from '@mui/material'
import { CustomButton } from './LoginLayout.style';

export default function LoginLayout() {
    return (
        <CustomButton>
            <Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Login to Github</Typography>
        </CustomButton>
    );
}
