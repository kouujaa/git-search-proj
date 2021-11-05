import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles({
  root: {
    float: "right",
    "& .MuiPaginationItem-root": {
      color: "#B0B7C3",
    },
    "& > *": {
      marginTop: 2,
    },
    "& .MuiPaginationItem-icon": {
      width: "30px",
      height: "30px",
      color: "white",
      borderRadius: "10px",
      backgroundColor: "black",
    },
    "& .Mui-selected": {
      backgroundColor: "#162a2a00",
      color: "black",
    },
  },
  vistor_Box: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
    marginRight: 15,
  },
  visitor_login: {
    minWidth: 100,
    color: "black",
    marginLeft: "-12px",
  },
  visitor_color: { color: "#FF1733" },
  bgColor: {
    backgroundColor: "#FFFFFF",
  },
  boldFont: {
    fontWeight: "bolder",
    textDecoration: "none",
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "100px",
  border: "solid",
  borderWidth: "1px",
  borderColor: "#C4C4C4",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "380px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  float: "right",
  height: "100%",
  color: "#5C5C5C",
  position: "absolute",
  left: "85%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: "100px",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const CustomButton = styled(Button)({
  padding: "8px 22px",
  margin: "0 8px",
  color: "#FFFFFF",
  backgroundColor: "#5C5C5C",
  borderRadius: "5px",
  width: "179px",
  height: "40px",
  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5C5C5C",
  },
  "&:visited": {
    textDecoration: "none",
    color: "#FFFFFF",
  },
});

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  root: {
    "& .MuiPaginationItem-root": {
      color: "#B0B7C3",
    },
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiPaginationItem-icon": {
      width: "30px",
      height: "30px",
      color: "white",
      borderRadius: "10px",
      backgroundColor: "black",
    },
    "& .Mui-selected": {
      backgroundColor: "#162a2a00",
      color: "black",
    },
  },
}));
export default useStyles;
