import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import NavBar, { Props } from "../NavBar";
const renderPaginationComp = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    navComponents: <></>,
    searchTerm: "1",
    setSearchTerm: jest.fn(),
  };
  return render(<MockedProvider><BrowserRouter><NavBar {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<NavBar />  unit tests", () => {
  it("should mount Nav bar", async () => {
    await renderPaginationComp()
    const navBarElment = screen.getByTestId("appNavBar")
    expect(navBarElment).toBeVisible()
  });

  it("should show passed in Reactnode elemet", async () => {
    const {findByRole} = await renderPaginationComp({navComponents: <h6>a</h6>})
    const navNodeElment = findByRole("heading")
    expect((await navNodeElment).textContent).toBe("a")
  });
});   