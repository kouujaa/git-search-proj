import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  overViewContainer: {
    width: 280,
    height: 140,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  resultsList: {
    maxHeight: "80vh",
    overflow: "scroll",
  },
  resultListText: {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 700,
    marginBottom: "15px",
    textTransform: "lowercase",
  },
  floatRight: {
    float: "right",
  },
  userCardComponent: {
    minWidth: 580,
    marginBottom: "20px",
    borderRadius: "3px",
    backgroundColor: "#FFFFF",
    minHeight: "70px",
    cursor: "pointer",
  },
  repoCardComponent: {
    minWidth: 680,
    marginBottom: "20px",
    borderRadius: "3px",
    backgroundColor: "#FFFFF",
    minHeight: "98px",
    cursor: "pointer",
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#91929E",
    lineHeight: "18.23px",
  },
  textFootnote: {
    fontSize: 12,
    fontWeight: 400,
    color: "#91929E",
    lineHeight: "15.62px",
    maxWidth: "445px",
    textOverflow: "ellipsis",
  },
  textName: {
    fontSize: 16,
    fontWeight: 700,
    color: "#00000",
  },
});

export default useStyles;
