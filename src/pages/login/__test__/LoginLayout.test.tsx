import React from "react";
import { render } from "@testing-library/react";
import LoginLayout, { Props } from "../layout/LoginLayout";

const renderLoginLayout = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    onSuccess() {
      return;
    },
    onFailure() {
      return;
    },
    loading: false,
    setLoading() {
      return;
    },
  };

  return render(<LoginLayout {...defaultProps} {...props} />);
};

describe("<LoginLayout />  unit tests", () => {
  it("should display Login to Github... mount on loading prop false", async () => {
    const { findByTestId } = renderLoginLayout({ loading: false });
    const loginBtn = await findByTestId("loginBtn");
    expect(loginBtn.textContent).toBe("Login to Github");
  });
  it("should display Please Wait...... mount on loading prop true", async () => {
    const { findByTestId } = renderLoginLayout({ loading: true });
    const loginBtn = await findByTestId("loginBtn");
    expect(loginBtn.textContent).toBe("Authenticating...");
  });
});
