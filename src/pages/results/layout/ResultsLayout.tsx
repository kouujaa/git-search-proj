import React from "react";
import { ResultsList } from "../components/ResultsList";

interface Props {
  type: string;
  data: any
}

const ResultsLayout: React.FC<Props> = ({
  type,
  data
}) => {
    
  return (
        <ResultsList type={type} data={data} />
  );
};

export default ResultsLayout;
