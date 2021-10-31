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
import UserLoginStatus from '../../components/UserLoginStatus';
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
    <div
      style={{
        height: "50%",
        width: "50%",
        display: "flex",
        marginTop: "-30vh",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "30px",
        alignItems: "center",
      }}
    >
      <UserLoginStatus />
      <div style={{ marginBottom: "-40px" }}>
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
      <CustomButton onClick={onSearch}>
        <NavLink to={"/result"}>
          <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
            Search Github
          </Typography>
        </NavLink>
      </CustomButton>
    </div>
  );
};

export default HomeLayout;
