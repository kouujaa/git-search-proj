import React from "react";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";

export interface Props {
  onNext: (e: React.ChangeEvent<any>, page: number) => any;
  length: number;
}

const CustomPagination: React.FC<Props> = ({ onNext, length }) => {
  const classes = useStyles();
  return (
    <div data-testid="paginationComp">
      <Pagination
        count={length}
        shape="rounded"
        onChange={onNext}
        className={classes.root}
      />
    </div>
  );
};

export default CustomPagination;
