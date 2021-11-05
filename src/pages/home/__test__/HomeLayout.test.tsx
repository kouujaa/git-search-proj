import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import HomeLayout, { Props } from "../layout/HomeLayout";

const renderSearchPageLayout = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    searchTerm: "",
    setSearchTerm:  jest.fn(),
  };
  return render(<MockedProvider><BrowserRouter><HomeLayout {...defaultProps} {...props} /></BrowserRouter></MockedProvider>);
};

describe("<HomeLayout />  unit tests", () => {
  it("should display Search Github button on mount", async () => {
    const button = await renderSearchPageLayout().findByText("Search Github")
    expect(button).toBeInTheDocument()
  });

  it("should have input on mount", async () => {
    const input = await renderSearchPageLayout().findByPlaceholderText("")
    expect(input).toBeInTheDocument()
  });

  it("should have search git hub button on mount", async () => {
    const button = await renderSearchPageLayout().findByText("Search Github")
    expect(button.textContent).toBe("Search Github")
  });
  // it("should change state inputed value", async () => {
  //   const inputEl = await renderSearchPageLayout().findByPlaceholderText("").valuez
  //   fireEvent.change(inputEl, {target:{
  //     value: "1"
  //   }})
  //   expect(inputEl.value).toBe("1")
  // });
  
});
