import * as React from 'react'
import { Typography } from '@mui/material'
import { CustomButton } from './HomeLayout.style';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './HomeLayout.style';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '100px',
    border: 'solid',
    borderColor: 'black',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderRadius: '100px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
interface Props {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
    onSearch: () => void,
}

const HomeLayout: React.FC<Props> = ({
    searchTerm,
    setSearchTerm,
    onSearch,
}) => {
    const classes = useStyles()
    return (
        <>
            <div style={{
                height: '50%',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <img src="/gitHub-Emblem.png" alt="gitHub_logo" height={90} width={205} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={((e) => { setSearchTerm(e.target.value) })}
                        value={searchTerm}
                    />
                </Search>

                <CustomButton onClick={onSearch}>
                    <Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Search Github</Typography>
                </CustomButton>
            </div>

        </>

    );
}


export default HomeLayout