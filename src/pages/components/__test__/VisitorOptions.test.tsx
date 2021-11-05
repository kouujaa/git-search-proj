import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import VisitorOptions, { Props } from "../VisitorOptions";
const renderStatusMenu = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    onLogOut: jest.fn(),
  };
  return render(<MockedProvider><BrowserRouter><VisitorOptions {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<VisitorOptions />  unit tests", () => {
  it("should display viewer options", async () => {
    await renderStatusMenu()
    const buttonElment = screen.getByTestId("viewerBtn")
    expect(buttonElment).toBeVisible()
  });

  it("should display viewer avatar", async () => {
    await renderStatusMenu()
    const buttonElment = screen.getByTestId("avatarBtn")
    expect(buttonElment).toBeVisible()
  });

  it("should display viewer name", async () => {
 await renderStatusMenu()
    const nameText = screen.getByTestId("viewerNamebtn")
    expect(nameText).toBeVisible()
  });

  it("should display Logout option on click", async () => {
    await renderStatusMenu()
    const toggleElment = screen.getByTestId("optionToggleBtn")
    fireEvent.click(toggleElment)
    const logoutTxt = screen.getByText("Logout")
    expect(logoutTxt).toBeVisible()
  });
});   