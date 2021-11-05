import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import CustomPagination, { Props } from "../CustomPagination";
const renderPaginationComp = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    onNext: jest.fn(),
    length: 0,
  };
  return render(<MockedProvider><BrowserRouter><CustomPagination {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<CustomPagination /> unit tests", () => {
  it("should display viewer options", async () => {
    await renderPaginationComp()
    const buttonElment = screen.getByTestId("paginationComp")
    expect(buttonElment).toBeVisible()
  });

  it("should display all proper pages number", async () => {
    await renderPaginationComp({length: 1})
    const buttonElment = screen.getByText("1")
    expect(buttonElment).toBeVisible()
  });
});   