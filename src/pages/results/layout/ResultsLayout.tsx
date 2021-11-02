import React from "react";
import { ResultsList } from "../components/ResultsList";
import { CircularProgress } from "@mui/material";

interface Props {
  type: string;
  data: any;
}

const ResultsLayout: React.FC<Props> = ({ type, data }) => {
  return <>{data.length ? <ResultsList type={type} data={data} /> : <CircularProgress size={20} sx={{color: 'black', marginLeft: '20px'}} />}</>;
};

export default ResultsLayout;
