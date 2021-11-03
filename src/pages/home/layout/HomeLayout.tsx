import * as React from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import useStyles, {
  CustomButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./HomeLayout.style";
interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const HomeLayout: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.mb40}>
        <img
          src="/gitHub-Emblem.png"
          alt="gitHub_logo"
          height={120}
          width={205}
        />
      </div>
      <Search>
        <StyledInputBase
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
      <NavLink to={`/result/${searchTerm}`} style={{ textDecoration: 'none' }}>
        <CustomButton onClick={onSearch}>
          <Typography variant="body1" className={classes.boldFont}>
            Search Github
          </Typography>
        </CustomButton>{" "}
      </NavLink>
    </div>
  );
};

export default HomeLayout;
