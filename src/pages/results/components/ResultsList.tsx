import React from "react";
import { ResultRow } from "./ResultRow";
import { Container, Typography } from "@mui/material";
import CustomPagination from "../../components/CustomPagination";

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
              textTransform: "lowercase",
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
        <CustomPagination
          onNext={onNext}
          length={Math.ceil(data.length / 10)}
        />
      </div>
    </Container>
  );
};
