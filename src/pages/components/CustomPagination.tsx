import React from "react";
import Pagination from "@mui/material/Pagination";
// import StyledPagination from "./styles"

export interface Props {
  onNext: any;
  length: number;
}

const CustomPagination: React.FC<Props> = ({ onNext, length }) => {
  return (
    <div style={{ float: "right" }} data-testid="paginationComp">
      <Pagination count={length} shape="rounded" onChange={onNext} />
    </div>
  );
};

export default CustomPagination;
