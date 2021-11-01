import * as React from "react";
import GitHubLogin from "react-github-login";
import "./loginbutton.css";

interface Props {
  onSuccess: (response: any) => void;
  onFailure: (response: any) => void;
  error?: string;
}

const LoginLayout: React.FC<Props> = ({ onSuccess, onFailure, error }) => {
  return (
    <>
      <GitHubLogin
        clientId="4f262cc9e20d3043da02"
        redirectUri={"http://localhost:3000"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        className={"Button"}
        buttonText={"Login to Github"}
      />
      {}
    </>
  );
};

export default LoginLayout;
