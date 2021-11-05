import React from "react";

import httpServices from "../../services/httpServices";
import LoginLayout from "./layout/LoginLayout";

const LoginController = () => {
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
