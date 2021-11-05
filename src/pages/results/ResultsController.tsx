import React from "react";
import Box from "@mui/material/Box";
import numeral from "numeral";
import VisitorOptions from "../components/VisitorOptions";
import NewSearch from "../components/NewSearch";

import Chip from "@mui/material/Chip";
import { Container, Typography } from "@mui/material";

import NavBar from "../components/NavBar";
import ResultsLayout from "./layout/ResultsLayout";
import useStyles from "./layout/Results.layout.style";

interface Props {
  match: any;
  searchTerm: string;
  setSearchTerm: () => void;
  repositoryData: any;
  userData: any;
}

enum TabValues {
  REPOSITORY = "REPOSITORIES",
  USERS = "USERS",
}

const ResultsController: React.FC<Props> = ({
  match,
  searchTerm,
  setSearchTerm,
  repositoryData,
  userData,
}) => {
  const [value, setValue] = React.useState<string>(TabValues.REPOSITORY);

  const onchange = (e: string) => {
    setValue(e);
  };
  const classes = useStyles();
  return (
    <>
      <NavBar
        navComponents={
          <>
            <Box sx={{ flexGrow: 1 }} />
            <NewSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              width={380}
              height={"32px"}
              placeholder={"Search"}
            />
            <Box sx={{ flexGrow: 1 }} />
            <VisitorOptions onLogOut={() => {}} data-testid="viewerLoginComp" />
          </>
        }
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Container className={classes.container}>
        <div className={classes.aside}>
          <div
            onClick={() => {
              onchange(TabValues.REPOSITORY);
            }}
            className={classes.asideDiv}
            style={{
              backgroundColor: `${
                value === TabValues.REPOSITORY ? "#F7F7F8" : ""
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
            <Chip
              label={numeral(repositoryData?.search?.repositoryCount).format(
                "0a"
              )}
            />
          </div>
          <div
            onClick={() => {
              onchange(TabValues.USERS);
            }}
            className={classes.asideDiv}
            style={{
              backgroundColor: `${value === TabValues.USERS ? "#F7F7F8" : ""}`,
            }}
          >
            <Typography className={classes.asideDivText}>
              {TabValues.USERS}
            </Typography>
            <Chip label={numeral(userData?.search?.userCount).format("0a")} />
          </div>
        </div>
        {value === TabValues.REPOSITORY && (
          <ResultsLayout
            type={TabValues.REPOSITORY}
            data={repositoryData?.search?.edges}
          />
        )}
        {value === TabValues.USERS && (
          <ResultsLayout
            type={TabValues.USERS}
            data={userData?.search?.edges}
          />
        )}
      </Container>
    </>
  );
};

export default ResultsController;
