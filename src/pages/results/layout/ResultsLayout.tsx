import React from "react";
import { ResultsList } from "../components/ResultsList";

interface Props {
  type: string;
  data: any;
}

const ResultsLayout: React.FC<Props> = ({ type, data }) => {
  return <>{data.length ? <ResultsList type={type} data={data} /> : null}</>;
};

export default ResultsLayout;
