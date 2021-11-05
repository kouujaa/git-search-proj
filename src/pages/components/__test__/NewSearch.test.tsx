import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import NewSearch, { Props } from "../NewSearch";
const renderSearchComp = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    searchTerm: '1',
    setSearchTerm: jest.fn(),
  };
  return render(<MockedProvider><BrowserRouter><NewSearch {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<NewSearch />  unit tests", () => {
  it("mount in screen", async () => {
    await renderSearchComp()
    const searchElment = screen.getByTestId("searchComp")
    expect(searchElment).toBeVisible()
  });

  it("should display placeholder if provided", async () => {
    await renderSearchComp({placeholder: "1"})
    const placeholderElment = screen.getByPlaceholderText("1")
    expect(placeholderElment).toBeVisible()
  });
});   