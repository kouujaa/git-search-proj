import React from "react";
import { ResultsList } from "../components/ResultsList";
import { CircularProgress } from "@mui/material";
import useStyles from "./Results.layout.style";

interface Props {
  type: string;
  data: any;
}

const ResultsLayout: React.FC<Props> = ({ type, data }) => {
  const classes = useStyles();
  return (
    <>
      {data?.length ? (
        <ResultsList type={type} data={data} />
      ) : (
        <CircularProgress size={20} className={classes.waiting_position} />
      )}
    </>
  );
};

export default ResultsLayout;
