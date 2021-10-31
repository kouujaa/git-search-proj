import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

const useStyles = () => ({
  container: {
    height: "50%",
    width: "50%",
    display: "flex",
    marginTop: "-30vh",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: "30px",
    alignItems: "center",
  },
});
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

export default useStyles;
