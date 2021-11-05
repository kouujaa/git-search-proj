import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useStyles from "./styles";
export interface Props {
  navComponents?: React.ReactNode;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<Props> = ({
  navComponents,
  searchTerm = "",
  setSearchTerm,
}) => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="fixed"
        className={classes.bgColor}
        // sx={{ backgroundColor: "#FFFFFF" }}
        data-testid="appNavBar"
      >
        <Toolbar>
          <img
            src="/gitHub-Emblem.png"
            alt="gitHub_logo"
            height={80}
            width={150}
          />
          {navComponents}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
