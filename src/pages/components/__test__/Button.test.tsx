import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import Button, { Props } from "../Button";

const renderButton = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    title: "1",
    height: "20px",
    width: "20px"
  };
  return render(<MockedProvider><BrowserRouter><Button {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<Button />  unit tests", () => {
  it("should display Search Github button on mount", async () => {
    await renderButton({title:"1"})
    const buttonElment = screen.getByRole("button")
    expect(buttonElment).toBeInTheDocument()
  });

  it("should have input on of title prop", async () => {
    await renderButton({title:"1"})
    const buttonElment = screen.getByText("1")
    expect(buttonElment).toHaveTextContent("1")
  });
});
