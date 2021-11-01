import React from "react";
import { useQuery } from "@apollo/client";

import Chip from "@mui/material/Chip";
import { Container, Typography } from "@mui/material";

import NavBar from "../components/NavBar";
import ResultsLayout from "./layout/ResultsLayout";
import UserLoginStatus from "../components/UserLoginStatus";
import { GET_REPOSITORIES, GET_USERS } from "../../services/queries";

//
import useStyles, {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../home/layout/HomeLayout.style";
import SearchIcon from "@mui/icons-material/Search";
import * as H from "history";

//
interface Props {
  match: any;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

enum TabValues {
  REPOSITORY = "REPOSITORIES",
  USERS = "USERS",
}

const ResultsController: React.FC<Props> = ({
  match,
  location,
  history,
  staticContext,
}) => {
  const [value, setValue] = React.useState(TabValues.REPOSITORY);
  const [repositories, setRepositories] = React.useState<any[]>([]);
  const [users, setUsers] = React.useState<any[]>([]);
  const [repositoryCount, setRepositoryCount] = React.useState<number>(0);
  const [usersCount, setUserCount] = React.useState<number>(0);
  const [searchTerms, setSearchTerm] = React.useState<string>("");
  const { searchTerm } = match.params;

  const {
    data: repositoryData,
    loading: loadingRepositories,
    error: repositoryError,
    refetch: refetchRepositories,
  } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: searchTerm },
  });
  const {
    data: userData,
    loading: loadingUsers,
    error: userError,
    refetch: refetchUsers,
  } = useQuery(GET_USERS, {
    variables: { queryString: searchTerm },
  });

  React.useEffect(() => {
    console.log({ repositoryData, loadingRepositories, repositoryError });
    console.log({ userData, loadingUsers, userError });
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

  React.useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

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
      <NavBar
        navComponents={
          <div style={{ display: "flex" }}>
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
