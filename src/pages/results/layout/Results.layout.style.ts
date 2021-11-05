import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "70vh",
    width: "60vw",
    display: "flex",
    backgroundColor: "#FAFBFC",
  },
  aside: {
    maxHeight: "140px",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "3px",
  },
  asideDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "15px",
    minWidth: "220px",
  },
  asideDivText: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "18.23px",
    color: "#5c5c5c",
  },
});
export default useStyles;

export const CustomButton = styled(Button)({
  padding: "8px 22px",
  margin: "0 8px",
  color: "#FFFFFF",
  backgroundColor: "#5C5C5C",
  borderRadius: "5px",
  width: "190px",
  height: "40px",
  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5C5C5C",
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "100px",
  border: "solid",
  borderColor: "#C4C4C4",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "580px",
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
  left: "90%",
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
