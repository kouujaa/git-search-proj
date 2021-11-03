import React from "react";
import * as H from "history";

import httpServices from "../../services/httpServices";
import LoginLayout from "./layout/LoginLayout";

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
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSuccess = async (response: any) => {
    const res = await httpServices.getToken(response.code);
    const { access_token, token_type } = res?.data;
    access_token && localStorage.setItem("access_token", access_token);
    token_type && localStorage.setItem("token_type", token_type);
    window.location.href = "/search";
  };

  const onFailure = React.useCallback((response: any) => {
    setLoading(false);
    // add error toast
  }, []);

  return (
    <>
      <LoginLayout
        onSuccess={onSuccess}
        onFailure={onFailure}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default LoginController;
