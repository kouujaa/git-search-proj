import React from "react";
import { useQuery } from "@apollo/client";

import Chip from "@mui/material/Chip";
import { Container, Typography } from "@mui/material";

import NavBar from "../components/NavBar";
import ResultsLayout from "./layout/ResultsLayout";
import UserLoginStatus from "../components/UserLoginStatus";
import { GET_REPOSITORIES, GET_USERS } from "../../services/queries";

//
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./layout/Results.layout.style";
import SearchIcon from "@mui/icons-material/Search";

//
interface Props {
  match: any;
}

enum TabValues {
  REPOSITORY = "REPOSITORIES",
  USERS = "USERS",
}

const ResultsController: React.FC<Props> = ({ match }) => {
  const [value, setValue] = React.useState(TabValues.REPOSITORY);
  const [repositories, setRepositories] = React.useState<any[]>([]);
  const [users, setUsers] = React.useState<any[]>([]);
  const [repositoryCount, setRepositoryCount] = React.useState<number>(0);
  const [usersCount, setUserCount] = React.useState<number>(0);
  const { searchTerm } = match.params;

  const {
    data: repositoryData,

  } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: searchTerm },
  });
  const {
    data: userData,

  } = useQuery(GET_USERS, {
    variables: { queryString: searchTerm },
  });

  React.useEffect(() => {
    if (
      repositoryData?.search?.repositoryCount &&
      !repositoryData.loadingRepositories
    ) {
      repositoryData && setRepositories(repositoryData.search.edges);
      repositoryData &&
        setRepositoryCount(repositoryData.search.repositoryCount);
    }
    if (userData?.search?.userCount && !userData.loadingUsers) {
      userData && setUsers(userData.search.edges);
      userData && setUserCount(userData.search.userCount);
    }
  }, [repositoryData, userData]);

  const onchange = (e: any) => {
    setValue(e);
  };

  return (
    <>
      <NavBar
        navComponents={
          <div style={{ display: "flex" }}>
            <Search>
              <StyledInputBase
                inputProps={{ "aria-label": "search" }}
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
          height: "70vh",
          width: "60vw",
          display: "flex",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div
          style={{
            maxHeight: "140px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
              minHeight: "51px",
              minWidth: "220px",
              padding: "1px 10px",
              margin: "0px 15px",
              backgroundColor: `${value === TabValues.REPOSITORY ? "#F7F7F8" : ""
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
            <Chip label={repositoryCount} />
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
              minHeight: "51px",
              minWidth: "220px",
              padding: "1px 10px",
              margin: "0px 15px",
              backgroundColor: `${value === TabValues.USERS ? "#F7F7F8" : ""}`,
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
            <Chip label={usersCount} />
          </div>
        </div>
        {value === TabValues.REPOSITORY && (
          <ResultsLayout type={TabValues.REPOSITORY} data={repositories} />
        )}
        {value === TabValues.USERS && (
          <ResultsLayout type={TabValues.USERS} data={users} />
        )}
      </Container>
    </>
  );
};

export default ResultsController;
