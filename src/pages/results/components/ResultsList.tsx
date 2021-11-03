import React from "react";
import Pagination from "@mui/material/Pagination";
import { ResultRow } from "./ResultRow";
import { Container, Typography } from "@mui/material";

interface Props {
  type: string;
  data: any;
}

export const ResultsList: React.FC<Props> = ({ type, data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const onNext = (e: React.ChangeEvent<any>, page: number) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
        <div>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: 700,
              marginBottom: "15px",
              textTransform: 'lowercase',
            }}
          >
            {`${data.length} ${type} results`}
          </Typography>
        </div>
        {data
          .slice(currentPage * 10 - 9, currentPage * 10)
          .map((datum: any) => (
            <ResultRow data={datum} type={type} key={datum.node.id} />
          ))}
      </div>
      <div style={{ float: "right" }}>
        <Pagination
          count={Math.ceil(data.length / 10)}
          shape="rounded"
          onChange={onNext}
        />
      </div>
    </Container>
  );
};
