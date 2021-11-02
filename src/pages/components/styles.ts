import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bgColor: {
    backgroundColor: "#FFFFFF",
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

export default useStyles;
