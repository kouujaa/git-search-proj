import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

const useStyles = () => ({
  overViewContainer: {
    width: 280,
    height: 140,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overViewRow: {
    width: 280,
    height: 40,
    color: "#5C5C5C",
    backgroundColor: "#F7F7F8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  }

});

export default useStyles;
