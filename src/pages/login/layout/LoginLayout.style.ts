import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'

export const CustomButton = styled(Button)({
    padding: '8px 22px',
    margin: '0 8px',
    color: '#FFFFFF',
    backgroundColor: '#5C5C5C',
    borderRadius: '5px',
    width: '179px',
    height: '50px',
    cursor: 'pointer',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#5C5C5C',
      },
})
