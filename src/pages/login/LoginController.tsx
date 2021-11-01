import React from "react";
import LoginLayout from "./layout/LoginLayout";
// import UserLoginStatus from "../components/UserLoginStatus";
import httpServices from "../../services/httpServices";
import * as H from "history";

interface Props {
  match: any;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

const LoginController: React.FC<Props> = ({
  match,
  location,
  history,
  staticContext,
}) => {
  const [error, setError] = React.useState<string>("");

  const onSuccess = async (response: any) => {
    const res = await httpServices.getToken(response.code);
    const { access_token, token_type } = res?.data;
    access_token && localStorage.setItem("access_token", access_token);
    token_type && localStorage.setItem("token_type", token_type);
    history.push("/home");
  };

  const onFailure = (response: any) => {
    setError("Login failed, try again");
  };

  return (
    <>
      <LoginLayout onSuccess={onSuccess} onFailure={onFailure} error={error} />
    </>
  );
};

export default LoginController;
