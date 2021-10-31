import React from "react";
import ResultsLayout from "./layout/ResultsLayout";
import Chip from "@mui/material/Chip";
import NavBar from "../components/NavBar";
import { TARGET } from "../../utils/constants";
import { Container, Typography } from "@mui/material";
import { repos, users } from "../../utils/mockData";
import UserLoginStatus from "../components/UserLoginStatus";
//
import useStyles, {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../home/layout/HomeLayout.style";
import SearchIcon from "@mui/icons-material/Search";
//

// import GitHubLogin from "react-github-login";
// const onSuccess = (response: any) => console.log(response);
// const onFailure = (response: any) => console.error(response);
enum TabValues {
  REPOSITORY = "REPOSITORIES",
  USERS = "USERS",
}

const ResultsController = () => {
  const [value, setValue] = React.useState(TabValues.REPOSITORY);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: any
  ) => {
    setValue(newValue);
  };
  const onchange = (e: any) => {
    setValue(e);
  };
  return (
    <>
      {/* <GitHubLogin clientId="4f262cc9e20d3043da02"
    onSuccess={onSuccess}
    onFailure={onFailure}/> */}
      <NavBar
        navComponents={
          <div style={{display: 'flex'}}>
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
            <UserLoginStatus />
          </div>
        }
      />
      <Container
        style={{
          height: "80vh",
          width: "60vw",
          display: "flex",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div
          style={{
            maxHeight: "140px",
            minWidth: "280px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
        >
          <div
            onClick={() => {
              onchange(TabValues.REPOSITORY);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              minHeight: "12px",
              minWidth: "220px",
              backgroundColor: `${
                value === TabValues.REPOSITORY ? "#F7F7F8" : "#FFFFF"
              }`,
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "18.23px",
                color: "#5c5c5c",
              }}
            >
              {TabValues.REPOSITORY}
            </Typography>
            <Chip label={repos.length} />
          </div>
          <div
            onClick={() => {
              onchange(TabValues.USERS);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              minHeight: "12px",
              minWidth: "220px",
              backgroundColor: `${
                value === TabValues.USERS ? "#F7F7F8" : "#FFFFF"
              }`,
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "18.23px",
                color: "#5c5c5c",
              }}
            >
              {TabValues.USERS}
            </Typography>
            <Chip label={users.length} />
          </div>
        </div>
        {value === TabValues.REPOSITORY && (
          <ResultsLayout type={TabValues.REPOSITORY} data={repos} />
        )}
        {value === TabValues.USERS && (
          <ResultsLayout type={TabValues.USERS} data={users} />
        )}
      </Container>
    </>
  );
};

export default ResultsController;
