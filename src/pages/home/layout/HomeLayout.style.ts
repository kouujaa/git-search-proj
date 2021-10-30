import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'

const useStyles = () => ({
container: {
    height: '50%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}
  })
export const CustomButton = styled(Button)({
    padding: '8px 22px',
    margin: '0 8px',
    color: '#FFFFFF',
    backgroundColor: '#5C5C5C',
    borderRadius: '5px',
    width: '179px',
    height: '40px',
    cursor: 'pointer',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#5C5C5C',
      },
})

export default useStyles