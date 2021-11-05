import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
export interface Props {
  searchTerm: string;
  setSearchTerm: (e: string) => void;
  width?: number;
  height?: string;
  placeholder?: string;
}

const NewSearch: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  width = 580,
  height = "50px",
  placeholder = "",
}) => {
  const preventReload = (e: any) => {
    e?.preventDefault();
  };
  return (
    <Paper
      component="form"
      onSubmit={preventReload}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width,
        borderRadius: "100px",
        border: "solid",
        borderWidth: "1px",
        borderColor: "#C4C4C4",
        boxShadow: "none",
      }}
      data-testid="searchComp"
    >
      <InputBase
        data-testid="searchInputBase"
        sx={{ ml: 1, flex: 1 }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        inputProps={{ "aria-label": "search gitHub" }}
        placeholder={placeholder}
      />
      <NavLink to={`/result/${searchTerm}`} style={{ textDecoration: "none" }}>
        <IconButton
          sx={{ p: "10px" }}
          aria-label="Search"
          data-testid="searchIconButton"
        >
          <SearchIcon />
        </IconButton>
      </NavLink>
    </Paper>
  );
};

export default NewSearch;
